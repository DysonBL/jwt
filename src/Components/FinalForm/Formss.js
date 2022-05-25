import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import { Button } from "react-bootstrap";
import Popup from "./Popup";
import { useState } from "react";

const Forms = () => {
  const required = (values) => (values ? undefined : "must fil Name");
  const mustBeMail = (values) => (values ? undefined : "must fil Email");
  const mustBePass = (values) =>
    isNaN(values) ? undefined : "only number feild";

  const [Show,setShow]=useState(false)
  const [showPopup,setShowPopup] = useState(false)
  const [Data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age: "",
  });
  console.log(Data,"Dayaa")
  const onSubmit = (values) => {
    JSON.stringify(values);
    setData(values);
    setShow(true)
    setShowPopup(true)
     };

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        initialValues={{ Name: "", Email: "", password: "", Age: "" }}
        render={({ handleSubmit, form, submitting, values, pristine }) => (
          <form onSubmit={handleSubmit}>
            <h1>Final Form</h1>
            <hr />
            <div>
              <Field name="Name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable"> Name</label>
                    <input {...input} type="text" placeholder="Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <Field name="Email" validate={mustBeMail}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable">Email</label>
                    <input {...input} type="text" placeholder="abc@gmail.com" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="password" validate={mustBePass}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable">paswd</label>
                    <input {...input} type="password" placeholder="password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="Age" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable">Age</label>
                    <input {...input} type="number" placeholder="your age is" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            {
              Show === true &&  <Popup passdata={Data} show={showPopup} />
            }
           <div className="buttons">      
              <Button type="submit" disabled={submitting || pristine}>
                submit
              </Button>
              <Button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      />
    </Styles>
  );
};
export default Forms;
