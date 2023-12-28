import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";
import useToggleProjectStatus from "./useToggleProjectStatus";

const ToggleProjectStatus = ({ project }) => {
   const status = project.status;
   const { toggleProjectStatus, isToggling } = useToggleProjectStatus();

   const toggleHandler = () => {
      const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";

      toggleProjectStatus({ id: project._id, data: { status: newStatus } });
   };

   return (
      <div className="w-[5rem]">
         {isToggling ? (
            <Loading
               height={25}
               width={35}
            />
         ) : (
            <Toggle
               label={status === "OPEN" ? "باز" : "بسته"}
               enabled={status === "OPEN" ? true : false}
               onChange={toggleHandler}
            />
         )}
      </div>
   );
};

export default ToggleProjectStatus;
