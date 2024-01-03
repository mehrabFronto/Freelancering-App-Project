import { HiCollection, HiOutlineViewGrid, HiUser } from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianDigits } from "../../utils/toPersianDigits";

const Stats = ({ numOfProjects, numOfProposals, numOfUsers }) => {
   return (
      <div className="grid grid-cols-3 gap-x-8">
         <Stat
            icon={<HiUser className="w-20 h-20" />}
            label="کاربران"
            value={toPersianDigits(numOfUsers)}
            color="yellow"
         />
         <Stat
            icon={<HiCollection className="w-20 h-20" />}
            label="پروژه ها"
            value={toPersianDigits(numOfProjects)}
            color="primary"
         />
         <Stat
            icon={<HiOutlineViewGrid className="w-20 h-20" />}
            label="درخواست ها"
            value={toPersianDigits(numOfProposals)}
            color="green"
         />
      </div>
   );
};

export default Stats;
