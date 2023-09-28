import { useState } from "react";
import "./fullName.css";
import { useNavigate } from "react-router-dom";

interface propType {
  inputId: string;
  fullName: string;
  step: number;
  handleNext: () => void;
  handleBack: () => void;
  placeholder: string;
  onChanged: ((inputId: string, value: string) => void | undefined) | undefined;
}
type InputData = {
  [key: string]: string;
};
export const FullName = ({
  fullName,
  handleNext,
  handleBack,
  step,
  placeholder,
  inputId,
  onChanged,
}: propType) => {
  const navigate = useNavigate();
  const [data, setData] = useState<InputData>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setData({ ...data, [inputId]: e.target.value });
    if (typeof onChanged === "function") {
      onChanged(inputId, e.target.value);
    }
  };
  console.log(data, "data");
  return (
    <div className="main">
      <img
        style={{ height: "100vh", width: "100vw" }}
        className="img-fluid"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pahalgam_views_13.JPG/1920px-Pahalgam_views_13.JPG"
        alt="Pahalgam One"
      />
      <div className="position-absolute top-50 start-50 translate-middle ms-5 me-0 texted">
        <div className="input-group input-group-lg border-success">
          <h1
            className="fullName text-light me-2 shadoweffects"
            id="inputGroup-sizing-lg"
          >
            {fullName}
          </h1>
          <input
            id={inputId}
            type="text"
            style={{ width: "100%" }}
            className="form-control ps-5 pe-5 opacity-75 rounded-pill text-info-emphasis"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            min={5}
            value={
              step === Number(inputId.charAt(inputId.length - 1))
                ? data[`${inputId}`]
                  ? data[`${inputId}`]
                  : ""
                : ""
            }
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
          {step === 4 && (
            <button
              className="next-button rounded-pill"
              onClick={() => navigate("/")}
            >
              Submit
            </button>
          )}
          {step < 4 && step >= 1 && (
            <button className="next-button rounded-pill" onClick={handleNext}>
              Next
            </button>
          )}
          {step > 1 && (
            <button className="next-button rounded-pill" onClick={handleBack}>
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
