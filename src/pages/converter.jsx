import { useState } from "react";
function Converter() {
    return(
<div className="container">
    <div className="row">
        <div className="col-12">
             <h4 className=""> Currency Converter</h4>
        </div>
        <div className="col-6">
           
            <input type="text" className=""/>
            <br/>
            <button type="button" className="">EUR</button>
            <button type="button" className="">USD</button>
            <button type="button" className="">KGS</button>
            <button type="button" className="">RUB</button>
            <button type="button" className="">YUAN</button>
            <button type="button" className="">LIRA</button>
            <button type="button" className="">POUND</button>
             </div>
             <div className="col-6">

            <input type="text" className=""/>
<br/>
            <button type="button" className="">EUR</button>
            <button type="button" className="">USD</button>
            <button type="button" className="">KGS</button>
            <button type="button" className="">RUB</button>
            <button type="button" className="">YUAN</button>
            <button type="button" className="">LIRA</button>
            <button type="button" className="">POUND</button>

        </div>
    </div>
</div>
    )
}
export default Converter;