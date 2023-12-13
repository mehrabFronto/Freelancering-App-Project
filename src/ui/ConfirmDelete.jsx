const ConfirmDelete = ({ resourceName, onClose, disabled, onConfirm }) => {
   return (
      <div className="">
         <h2 className="font-bold text-base mb-8">
            آیا از حذف {resourceName} مطمئن هستید؟
         </h2>
         <div className="flex justify-between items-center gap-x-12">
            <button
               onClick={onClose}
               disabled={disabled}
               className="btn btn--primary flex-1 py-3">
               لغو
            </button>
            <button
               onClick={onConfirm}
               className="btn btn--danger flex-1 py-3">
               تایید
            </button>
         </div>
      </div>
   );
};

export default ConfirmDelete;
