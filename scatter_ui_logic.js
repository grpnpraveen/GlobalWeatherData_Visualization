function show_scat(param)
{
    let x_scat,y_scat;
  
    if(current_active!=-1)
    {
        document.getElementById("yy1").checked=true;
        document.getElementById("y1").style.background="#7da6ff";
        document.getElementById("xx1").checked=true;
        document.getElementById("x1").style.background="#7da6ff";
        x_scat=1;
        y_scat=1;
    }
    current_active = -1;
    const colorRadios = document.querySelectorAll('input[type="radio"][name="color"]');
        colorRadios.forEach(radio => {
        radio.checked = false;
        });
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#36393f";
    cat6.style.background="#36393f";
    cat7.style.background="#36393f";
    cat8.style.background="#36393f";
    cat9.style.background="#36393f";
    cat10.style.background="#36393f";
    cat11.style.background="#36393f";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    for(let i=1;i<16;i++)
    {
        if(param[0]=='x')
        {
            document.getElementById("x"+i.toString()).style.background="#36393f";
        }
        else{
            document.getElementById("y"+i.toString()).style.background="#36393f";
        }
        
    }

//     if(param[0]=='x')
//     {
        // const colorRadios2 = document.querySelectorAll('input[type="radio"][name="scatter"]');
        // colorRadios2.forEach(radio => {
        //     console.log(radio.id);
        //    if(radio)
        // });
//     }
//    else{
//     const colorRadios2 = document.querySelectorAll('input[type="radio"][name="scatter2"]');
//     colorRadios2.forEach(radio => {
//         console.log(radio.id);
//         // radio.checked = false;
//     });
//    }
    let this_btn = document.getElementById(param).style.background="#7da6ff";
    let this_radio = document.getElementById(param[0]+param).checked=true;

    if(param[0]=="x")
    {
        x_scat = parseInt(param.substring(1));
        const colorRadios2 = document.querySelectorAll('input[type="radio"][name="scatter2"]');
        colorRadios2.forEach(radio => {
            if(radio.checked)
            {
                console.log("FINEEE");
                y_scat=radio.id.toString().substring(2);
            } 
    });
    }
    else{
        y_scat = parseInt(param.substring(1));
        const colorRadios2 = document.querySelectorAll('input[type="radio"][name="scatter"]');
        colorRadios2.forEach(radio => {
            if(radio.checked)
            {
                console.log("FINEEE");
                x_scat=radio.id.toString().substring(2);
            } 
    });
    }
    //show scatter
    console.log(y_scat);    
    createScatterPlot(columns[x_scat-1],columns[y_scat-1]);

}