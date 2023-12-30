import {
   HiCollection,
   HiCurrencyDollar,
   HiOutlineViewGrid,
} from "react-icons/hi";
import Stat from "../../ui/Stat";
import {
   toPersianDigits,
   toPersianDigitsWithCommas,
} from "../../utils/toPersianDigits";

const Stats = ({ proposals }) => {
   const numOfProposals = proposals.length;
   const acceptedProposals = proposals.filter((p) => p.status === 2);
   const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

   return (
      <div className="grid grid-cols-3 gap-x-8">
         <Stat
            icon={<HiOutlineViewGrid className="w-20 h-20" />}
            label="درخواست ها"
            value={toPersianDigits(numOfProposals)}
            color="primary"
         />
         <Stat
            icon={<HiCurrencyDollar className="w-20 h-20" />}
            label="درخواست های تایید شده"
            value={toPersianDigits(acceptedProposals.length)}
            color="green"
         />
         <Stat
            icon={<HiCollection className="w-20 h-20" />}
            label="کیف پول"
            value={toPersianDigitsWithCommas(balance)}
            color="yellow"
         />
      </div>
   );
};

export default Stats;
