import React, { useState } from "react";
import QRCode from "react-qr-code";
// import QRCode from "qrcode";
import BarcodeReader from "react-barcode-reader";

const QRcodegenerator = () => {
  const [data, setData] = useState("No data");
  const [ValueToFill, setValue] = useState("");
  const [QRRUL, setQrUrl] = useState(null);

  const HandleScan = (data) => {
    setData(data);
  };

  const HandleError = (err) => {
    console.log(err);
  };

  const GenerateQrCode = async () => {
    // const response = await QRCode.toDataURL(ValueToFill)
    setQrUrl(ValueToFill);
    // console.log(response)
  };

  return (
    <div className="mt-3 container">
      <h5>QRcode generator ...</h5>

      <section className="p-3 m-3">
        <h5>Generate QrCode</h5>
        <input
          className="form-control"
          onChange={(e) => setValue(e.target.value)}
          value={ValueToFill}
          placeholder="Enter text here"
          name="ValueToFill"
        />
        <button className="btn btn-success mt-2" onClick={GenerateQrCode}>
          generate
        </button>

        {QRCode && (
          <section className="mt-2">
            <QRCode size={200} value="mrwilbroadmark" />
          </section>
        )}
      </section>

      {/* <section className='row gap-3'>
          <section className='col-3 p-2 border '>
          <QRCode 
          size={200}
           
          value='mrwilbroadmark'/>
          </section>


          <section className='col-3 p-2 border '>
          <QRCode value='developer'/>
          </section>


          <section className='col-3 p-2 border '>
          <QRCode value='0652341675'/>
          </section>

         </section> */}

      <section className="mt-4">
        <h4>Barcode Reader</h4>
        <section className="mt-2">
          <BarcodeReader onError={HandleError} onScan={HandleScan} />

          <p>value : {data}</p>
        </section>
      </section>
    </div>
  );
};

export default QRcodegenerator;
