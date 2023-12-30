import {
   HiCollection,
   HiCurrencyDollar,
   HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import { toPersianDigits } from "../../utils/toPersianDigits";

const Stats = ({ projects }) => {
   const numOfProjects = projects.length;
   const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
   const numOfProposals = projects.reduce(
      (acc, curr) => acc + curr.proposals.length,
      0,
   );

   return (
      <div className="grid grid-cols-3 gap-x-8">
         <Stat
            icon={<HiOutlineViewGrid className="w-20 h-20" />}
            label="پروژه ها"
            value={toPersianDigits(numOfProjects)}
            color="primary"
         />
         <Stat
            icon={<HiCurrencyDollar className="w-20 h-20" />}
            label="پروژه های واگذار شده"
            value={toPersianDigits(numOfAcceptedProjects)}
            color="green"
         />
         <Stat
            icon={<HiCollection className="w-20 h-20" />}
            label="درخواست ها"
            value={toPersianDigits(numOfProposals)}
            color="yellow"
         />
      </div>
   );
};

export default Stats;
