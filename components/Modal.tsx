// components/Modal.tsx
function Modal({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
      <div
        style={{
          position: "relative",
          margin: "10% auto",
          padding: "20px",
        }}
        className="bg-white dark:bg-gray-700 rounded-lg"
      >
        <p>Are you sure you want to delete this item?</p>
        <div className="flex justify-evenly gap-4 mt-4">
          <button
            onClick={() => {
              onClose();
            }}
            className="flex-1 bg-gray-300 dark:bg-gray-800 rounded-lg px-4 py-2"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm();
            }}
            className="flex-1 bg-red-500 rounded-lg px-4 py-2 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
