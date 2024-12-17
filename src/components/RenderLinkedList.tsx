import LLStr from "./LLStr";
import DoublyLLStr from "./DoublyLLStr";
import RightArrowIcon from "../icons/RightArrowIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";

type Props = {
  type: string;
  res: any[];
  operation: string;
};

const RenderLinkedList = ({ type, res, operation }: Props) => {
  return (
    <div className="resContainer">
      <pre className="result">// {`${operation}\n\n`}</pre>
      <div className="result">
        {type === "singly_ll" && (
          <>
            {res.map((elem, i) => {
              return (
                <div
                  key={`${elem.data}-${i}`}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <LLStr
                    data={elem.data}
                    next={elem.next?.data || JSON.stringify(elem.next)}
                  />

                  {i <= res.length - 2 && (
                    <RightArrowIcon height="30px" width="30px" />
                  )}
                </div>
              );
            })}
          </>
        )}
        {type === "doubly_ll" && (
          <>
            {res.map((elem, i) => {
              return (
                <div
                  key={`${elem.data}-${i}`}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <DoublyLLStr
                    data={elem.data}
                    forward={elem.forward?.data || JSON.stringify(elem.forward)}
                    backward={
                      elem.backward?.data || JSON.stringify(elem.backward)
                    }
                  />
                  {i <= res.length - 2 && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <RightArrowIcon height="20px" width="20px" />
                      <LeftArrowIcon height="20px" width="20px" />
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
        {type === "header_ll" && (
          <>
            {res.map((elem, i) => {
              return (
                <div
                  key={`${elem.data}-${i}`}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <LLStr
                    data={elem.data}
                    next={elem.next?.data || JSON.stringify(elem.next)}
                    className={i === 0 ? "headNode" : ""}
                    dataInfo={i === 0 ? "len" : ""}
                  />

                  {i <= res.length - 2 && (
                    <RightArrowIcon height="20px" width="20px" />
                  )}
                </div>
              );
            })}
          </>
        )}
        {type === "circular_ll" && (
          <>
            {res.map((elem, i) => {
              return (
                <div
                  key={`${elem.data}-${i}`}
                  style={{ display: "flex", gap: "5px", alignItems: "center" }}
                >
                  <LLStr
                    data={elem.data}
                    next={elem.next?.data || JSON.stringify(elem.next)}
                  />

                  {i <= res.length - 2 && (
                    <RightArrowIcon height="20px" width="20px" />
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default RenderLinkedList;
