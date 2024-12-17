type Props = {
  data: string;
  next: string;
  className?: string;
  dataInfo?: string;
};

const SingleyLLStr = ({ next, data, className, dataInfo }: Props) => {
  return (
    <div className={`linkedListStr ${className}`}>
      <div>
        {dataInfo ? `${dataInfo} - ` : " "}
        {data}
      </div>
      <div>F-{next}</div>
    </div>
  );
};

export default SingleyLLStr;
