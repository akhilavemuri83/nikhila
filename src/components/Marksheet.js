import React, { useEffect, useRef } from 'react'

//function Marksheet() {
  let Marksheet = (props) =>{
    let nameInputRef = useRef();
    let emailInputRef = useRef();
    let mobileNoInputRef = useRef();
    let passwordInputRef = useRef();
    let telInputRef = useRef(); 
    let engInputRef = useRef(); 
    let mathInputRef = useRef();
    let sciInputRef = useRef();
    let sociInputRef = useRef();
    let hinInputRef = useRef();
    let resultParaRef = useRef();
    let calculateBtnRef = useRef();

    let namespanRef = useRef();
    let mobileNospanRef = useRef();
    let emailspanRef = useRef();
    let passwordspanRef = useRef();
    let telspanRef = useRef();
    let engspanRef = useRef();
    let mathspanRef = useRef();
    let scispanRef = useRef();
    let socispanRef = useRef();
    let hinspanRef = useRef();

    let nameRegEx = /^[A-Za-z\s]{2,30}$/;
    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let mobileRegEx = /^[0-9]{10}$/;

    useEffect(()=>{

      console.log("SSCMarksResult component loaded");
    },[]);

    let inputOnFocus = (inputRef)=>{
      inputRef.current.style.backgroundColor="skyblue";
    }

    let inputOnChange = (inputRef,spanRef,maxMarks=75,passMarks=26)=>{
      let marks = inputRef.current.value;

              if(marks >=0 && marks<=maxMarks){

                 if(marks>=passMarks) {
              spanRef.current.innerHTML= "Pass😃";
              spanRef.current.style.backgroundColor= "green";
              }else{
               spanRef.current.innerHTML= "Fail😞";
              spanRef.current.style.backgroundColor= "red"; 

              }
              calculateBtnRef.current.style.display = "inline-block";

              }else{
                spanRef.current.innerHTML= "Invalid";
                spanRef.current.style.backgroundColor= "gold"; 
                calculateBtnRef.current.style.display = "none";
              }
    }

    let inputOnBlur = (inputRef)=>{
        inputRef.current.style.backgroundColor="";
      }


      let onCalculateBtnClick = ()=>{
            let studentName = nameInputRef.current.value;
            let telMarks = Number(telInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let mathMarks = Number(mathInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let sociMarks = Number(sociInputRef.current.value);
            let hinMarks = Number(hinInputRef.current.value);
            let totalMarks=telMarks + engMarks + mathMarks + sciMarks + sociMarks + hinMarks;
            //alert(totalMarks);

            let perc = (totalMarks/600)*100;

            if(telMarks < 26||engMarks < 26||mathMarks < 26||sciMarks < 26||sociMarks < 26||hinMarks < 26){
              resultParaRef.current.innerHTML = `${studentName}failed in SSC.`; 
            }else{
              resultParaRef.current.innerHTML = `${studentName} Passed in SSC and the total of ${totalMarks} with percentage of ${perc.toFixed(2
                )}%`;

            }
      };

      let validateName = (inputRef,spanRef)=>{

        let result = nameRegEx.test(inputRef.current.value);

        if(result == true){
          spanRef.current.innerHTML = "valid";
          spanRef.current.style.backgroundColor = "Green"
        }else{
          spanRef.current.innerHTML = "Invalid";
          spanRef.current.style.backgroundColor = "Red" 
        }
      }

      let validateEmail = (inputRef,spanRef)=>{

        let result = emailRegEx.test(inputRef.current.value);

        if(result == true){
          spanRef.current.innerHTML = "valid";
          spanRef.current.style.backgroundColor = "Green"
        }else{
          spanRef.current.innerHTML = "Invalid";
          spanRef.current.style.backgroundColor = "Red" 
        }
      }

      let validatePassword = (inputRef,spanRef)=>{

        let result = passwordRegEx.test(inputRef.current.value);

        if(result == true){
          spanRef.current.innerHTML = "valid";
          spanRef.current.style.backgroundColor = "Green"
        }else{
          spanRef.current.innerHTML = "Invalid";
          spanRef.current.style.backgroundColor = "Red" 
        }
      }
      
      let validateMobile = (inputRef,spanRef)=>{

        let result = mobileRegEx.test(inputRef.current.value);

        if(result == true){
          spanRef.current.innerHTML = "valid";
          spanRef.current.style.backgroundColor = "Green"
        }else{
          spanRef.current.innerHTML = "Invalid";
          spanRef.current.style.backgroundColor = "Red" 
        }
      }

  return (
    <div>
      <form>
        <b><caption>SSCMarksResults</caption></b>
        <div>
            <label>Name</label>
            <input ref={nameInputRef}
            onFocus={()=>{
             console.log("Name on focus");
             nameInputRef.current.style.backgroundColor="skyblue";

            }}
            onChange={()=>{
              console.log("Name on change");
             validateName(nameInputRef,namespanRef);

            }}
            onBlur={()=>{
              console.log("Name on blur");
              nameInputRef.current.style.backgroundColor="";

            }}></input>
            <span ref={namespanRef}></span>
               
        </div>

        <div>
            <label>Email</label>
            <input ref={emailInputRef}
            onFocus={()=>{
             console.log("Email on focus");
             emailInputRef.current.style.backgroundColor="skyblue";

            }}
            onChange={()=>{
              console.log("Email on change");
              validateEmail(emailInputRef,emailspanRef);
             

            }}
            onBlur={()=>{
              console.log("Email on blur");
              emailInputRef.current.style.backgroundColor="";

            }}></input>
            <span ref={emailspanRef}></span>
               
        </div>

        <div>
            <label>Mobile</label>
            <input ref={mobileNoInputRef}
            onFocus={()=>{
             console.log("Mobile on focus");
             mobileNoInputRef.current.style.backgroundColor="skyblue";

            }}
            onChange={()=>{
              console.log(" Mobile on change");
              validateMobile(mobileNoInputRef,mobileNospanRef);

            }}
            onBlur={()=>{
              console.log("Mobile on blur");
              mobileNoInputRef.current.style.backgroundColor="";

            }}></input>
            <span ref={mobileNospanRef}></span>
               
        </div>

        <div>
            <label>Password</label>
            <input ref={passwordInputRef}
            onFocus={()=>{
             console.log("password on focus");
             passwordInputRef.current.style.backgroundColor="skyblue";

            }}
            onChange={()=>{
              console.log(" password on change");
              validatePassword(passwordInputRef,passwordspanRef);

            }}
            onBlur={()=>{
              console.log("password on blur");
              passwordInputRef.current.style.backgroundColor="";

            }}></input>
            <span ref={passwordspanRef}></span>
               
        </div>

        <div>
            <label>Telugu</label>
            <input ref={telInputRef} 
            onFocus={()=>{
             inputOnFocus(telInputRef);

            }}
            onChange={()=> {
              inputOnChange(telInputRef,telspanRef,75,26);
            

            }}
            onBlur={()=>{
              inputOnBlur(telInputRef);
            }}></input>
            <span ref={telspanRef}></span>
        </div>

        <div>
            <label>English</label>
            <input ref={engInputRef}
            onFocus={()=>{
              inputOnFocus(engInputRef);
            }}
            onChange={()=>{
            inputOnChange(engInputRef,engspanRef,75,26);  

            }}
            onBlur={()=>{
              inputOnBlur(engInputRef);
            }}
            ></input>
            <span ref={engspanRef}></span>
        </div>

        <div>
            <label>Mathematics</label>
            <input ref={mathInputRef}
            onFocus={()=>{
             inputOnFocus(mathInputRef);
            }}
            onChange={()=>{
            inputOnChange(mathInputRef,mathspanRef,75,26);  

            }}
            onBlur={()=>{
              inputOnBlur(mathInputRef);
            }}></input>
            <span ref={mathspanRef}></span>
        </div>

        <div>
            <label>General Science</label>
            <input ref={sciInputRef}
            onFocus={()=>{
              inputOnFocus(sciInputRef);
            }}
            onChange={()=>{
              inputOnChange(sciInputRef,scispanRef,75,26);

            }}
            onBlur={()=>{
              inputOnBlur(sciInputRef);
            }}></input>
            <span ref={scispanRef}></span>
        </div>

        <div>
            <label>Social Studies</label>
            <input ref={sociInputRef}
            onFocus={()=>{
              inputOnFocus(sociInputRef);
            }}
            onChange={()=>{
             inputOnChange(sociInputRef,socispanRef,75,26);

            }}
            onBlur={()=>{
            inputOnBlur(sociInputRef);
            }}></input>
            <span ref={socispanRef}></span>
        </div>

        <div>
            <label>Hindi</label>
            <input ref={hinInputRef}
            onFocus={()=>{
              inputOnFocus(hinInputRef);
            }}
            onChange={()=>{
             inputOnChange(hinInputRef,hinspanRef,75,26);

            }}
            onBlur={()=>{
              inputOnBlur(hinInputRef);
            }}></input>
            <span ref={hinspanRef}></span>
        </div>

        <div>
          <button ref={calculateBtnRef} type="button"onClick= {() => {
            
            // nameInputRef.current.style.backgroundColor = "skyblue";
            // nameInputRef.current.style.color = "white";

            // telInputRef.current.style.backgroundColor = "black";
            // telInputRef.current.style.color = "white";
            // telInputRef.current.style.value = 99988877766;
            

            // engInputRef.current.style.backgroundColor = "black";
            // engInputRef.current.style.color = "white";
            // engInputRef.current.style.value = 78;
           

            // mathInputRef.current.style.backgroundColor = "black";
            // mathInputRef.current.style.color = "white";
            // mathInputRef.current.style.value = 98;
            

            // sciInputRef.current.style.backgroundColor = "black";
            // sciInputRef.current.style.color = "white";
            // sciInputRef.current.style.value = 22;
            

            // sociInputRef.current.style.backgroundColor = "black";
            // sociInputRef.current.style.color = "white";
            // sociInputRef.current.style.value = 66;
            

            // hinInputRef.current.style.backgroundColor = "black";
            // hinInputRef.current.style.color = "white";
            // hinInputRef.current.style.value = 77;
           

            onCalculateBtnClick();


          }}>
            Calculate</button>
        </div>
        <div>
          <label className="resultPara"ref={resultParaRef}>Enter Marks and Click Calculate</label>
        </div>
      </form>


    </div>
  )
}

export default Marksheet
