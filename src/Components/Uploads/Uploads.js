import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import S3 from "react-aws-s3";

function Uploads() {
  const fileInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("upload");
    let file = fileInput.current.file[0];
    let newFileName = fileInput.current.file[0].name;
    console.log(newFileName,"newFile")
    const config = {
      bucketName: "myBucket",
      dirName: "mydirectory",
      region: "",
      accessKeyId: "",
      secretAccessKey: "",
    };
    const reactS3Client = new S3(config);
    reactS3Client.uploadFile(file.newFileName).then((data) => {
      if (data.status === 200) {
        console.log("successfuly uploaded");
      } else {
        console.log("upload faild");
      }
    });
  };
  return (
    <div>
      <div className="Uplods">
        <Form >
          <Form.Group >
            <Form.Label type="file" ref={fileInput}></Form.Label>
            <Form.Control type="file" size="md" />
          </Form.Group>
        </Form>
      </div>
      <Button onClick={handleSubmit}>Upload</Button>
    </div>
  );
}

export default Uploads;
