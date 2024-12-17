type Props = {
  data: string;
  forward: string;
  backward: string;
};

const DoublyLLStr = ({ forward, backward, data }: Props) => {
  return (
    <div className="linkedListStr doublyLL">
      <div>{data}</div>
      <div>B-{backward}</div>
      <div>F-{forward}</div>
    </div>
  );
};

export default DoublyLLStr;
