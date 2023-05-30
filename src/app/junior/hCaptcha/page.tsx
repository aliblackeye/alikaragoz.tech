"use client";
// Import React
import { useCallback, useEffect, useState } from "react";

// Import React Toastify
import { ToastContainer, toast } from "react-toastify";

// Import Date-FNS
import { addMinutes, format } from "date-fns";

// Import Icons
import { BsX } from "react-icons/bs";
import { TbChecklist } from "react-icons/tb";

// Import Components
import Input from "@components/Input";
import Button from "@components/Button";
import Modal from "@components/Modal";
import Wallet from "@components/Wallet";
import Captcha from "@/src/components/Captcha";

export default function Home() {
  // Variables
  const claimSuccessToast = () => toast.success("Prim alındı!");
  const claimWaitToast = () =>
    toast.warn("Bir sonraki talep etme zamanı gelene kadar bekleyin!");
  const claimValidateToast = () => toast.warn("Lütfen captcha doğrulayın!");

  // States
  const [visible, setVisible] = useState(false);
  const [lastClaimTime, setLastClaimTime] = useState<Date | undefined>();
  const [nextClaim, setNextClaim] = useState<Date | undefined>();
  const [stakeEnd, setStakeEnd] = useState<Date | undefined>();
  const [firstDate, setFirstDate] = useState<Date | undefined>();
  const [currentDate, setCurrentDate] = useState<Date | undefined>();
  const [isVerified, setIsVerified] = useState(false);

  // Modalı açmak için fonksiyon
  const handleVisible = useCallback(() => {
    setVisible(true);
  }, []);

  // Modalı kapatmak için fonksiyon
  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);

  const sitekey = "ea3768af-b414-4e23-a8b5-e92e38021bb9";

  // Claimleme için fonksiyon
  const handleClaim = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (isVerified) {
        // Claimleme işlemleri
        const formData = new FormData(e.target as HTMLFormElement);

        if (!lastClaimTime && !nextClaim && currentDate) {
          setLastClaimTime(currentDate);
          setNextClaim(addMinutes(currentDate, 1));
          claimSuccessToast();
          return;
        }

        if (
          lastClaimTime &&
          nextClaim &&
          currentDate &&
          currentDate >= nextClaim
        ) {
          setLastClaimTime(nextClaim);
          setNextClaim(addMinutes(currentDate, 1));
          claimSuccessToast();
        }
      }

      if (!isVerified) {
        claimValidateToast();
      }
    },
    [currentDate, nextClaim, lastClaimTime]
  );

  // UseEffects
  useEffect(() => {
    setFirstDate(new Date());
  }, []);

  useEffect(() => {
    // Component ilk yüklendiğinde tarihi set ediyoruz
    setTimeout(() => {
      setCurrentDate(new Date());
    }, 1000);
  }, [currentDate]);

  useEffect(() => {
    if (firstDate && lastClaimTime) {
      const stakeEndTime = new Date(
        firstDate.getFullYear(),
        firstDate.getMonth(),
        firstDate.getDate() + 1,
        17,
        55,
        0
      );
      setStakeEnd(stakeEndTime);
    }
  }, [firstDate, lastClaimTime]);

  return (
    <>
      <div className="captcha-page">
        <ToastContainer />

        <div className="home-page-top fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Button
            className="bg-[#314452] !px-6 !py-3 !text-xl !font-semibold text-white"
            onClick={handleVisible}
            label="Prim Al"
          />
        </div>
        <Modal
          visible={visible}
          onClose={handleClose}
          header={
            <>
              <div className="flex justify-between items-center m-8">
                <div className="flex items-center gap-2">
                  <TbChecklist size={24} />
                  <span className="!text-xl font-semibold">VIP</span>
                </div>
                <div className="flex items-center">
                  <BsX
                    size={24}
                    className="text-[#f5f5f5] cursor-pointer"
                    onClick={handleClose}
                  />
                </div>
              </div>
            </>
          }
          body={
            <div className="mx-8">
              <form
                onSubmit={handleClaim}
                className="flex justify-center items-center flex-col text-[#9fa8be] text-md gap-2 "
              >
                <Wallet amount={31.01} />
                <Input
                  className="mb-2"
                  type="number"
                  min={1}
                />

                <Button
                  label="Prim Alın"
                  disabled={
                    !isVerified ||
                    (lastClaimTime && nextClaim && nextClaim > new Date())
                  }
                  className="bg-[#00e701] text-black !text-[10px] !p-6 w-[300px] sm:w-[450px]"
                  type="submit"
                />
                {/* hCaptcha */}
                <Captcha
                  type="hCaptcha"
                  sitekey={sitekey}
                  onClose={() => {
                    console.log("onClose");

                    isVerified ? setIsVerified(true) : setIsVerified(false);
                  }}
                  onExpire={() => {
                    setIsVerified(false);
                  }}
                  onVerify={() => {
                    console.log("onVerify");
                    setIsVerified(true);
                  }}
                />
                {lastClaimTime && stakeEnd && nextClaim && (
                  <>
                    <p>{`Bir sonraki talep etme zamanı ${format(
                      nextClaim as Date,
                      "HH:mm dd.MM.yyyy"
                    )}`}</p>
                    <p>{`Prim şu tarihte sona erecek ${format(
                      stakeEnd as Date,
                      "HH:mm dd.MM.yyyy"
                    )}`}</p>
                  </>
                )}
              </form>
            </div>
          }
          footer={
            <>
              <div className="flex justify-center items-center bg-[#10212d] text-[#9fa8be] font-semibold rounded-b-xl p-8">
                <p>
                  {"Black Casino'da VIP olma hakkında daha fazla bilgi edin"}
                </p>
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
