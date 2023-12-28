import { ThreeDots } from "react-loader-spinner";

const Loading = ({ width = "75", height = "75" }) => {
   return (
      <ThreeDots
         height={height}
         width={width}
         color="rgb(var(--color-primary-900))"
         radius="9"
         wrapperClass="w-full flex justify-center items-center"
         visible={true}
      />
   );
};

export default Loading;
