// Import modules
import { useEffect, useState } from "react"
import { BsCardChecklist, BsX } from "react-icons/bs"

// Types

interface ModalProps {
  visible: boolean;
  onClose: () => void;

  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export default function Modal(props: ModalProps) {

  const { visible, onClose, header, footer, className, body } = props;

  const classList = [
    "modal-layout fixed w-screen h-screen z-50 bg-black bg-opacity-40 inset-0 ",
    className
  ];

  useEffect(() => {
    window.onclick = function (event: any) {
      if (visible && event.target.classList.contains("modal-layout")) {
        onClose()
      }

    }
  }, [onClose, visible]
  )

  return (
    <>
      {visible && (
        <div className={`${classList.join(" ")}`}>

          <div className="modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-sm">
            <div className="modal bg-[#1c2d39] rounded-xl">
              {header && (
                <div className="stack-modal-header py-4">
                  {header}
                </div>
              )}

              <div className="stack-modal-body py-4">
                {body}
              </div>

              {footer && (
                <div className="stack-modal-footer">
                  {footer}
                </div>
              )}

            </div>
          </div>



        </div>
      )}
    </>

  )
}
