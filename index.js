
function show_cat(data_num)
{

  let is_direction = document.getElementById("direction").checked;
  console.log(is_direction);
  let cat1,cat2,cat3;
  cat1=document.getElementById("cat1");
  cat2=document.getElementById("cat2");
  cat3=document.getElementById("cat3");
  
  let rad1,rad2,rad3;
  rad1=document.getElementById("condition_text");
  rad2=document.getElementById("wind_direction");
  rad3=document.getElementById("moon_phase");
  switch(data_num) {
    case 1:
    rad1.checked=true;
      if(is_direction)
      {
        createHorBarGraph("condition_text");
      }
      else{
        createVisualization("condition_text");
      }
      cat1.style.background="#7da6ff";
      cat2.style.background="#36393f";
      cat3.style.background="#36393f";
   
      break;
      case 2:
      rad2.checked=true;
      if(is_direction)
      {
        createHorBarGraph("wind_direction");
      }
      else{
      createVisualization("wind_direction");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#7da6ff";
    cat3.style.background="#36393f";
      break;
    case 3:
    rad3.checked=true;
    if(is_direction)
    {
      createHorBarGraph("moon_phase");
    }
    else{
      createVisualization("moon_phase");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#7da6ff";
      break;

    default:
        if(is_direction)
        {
          createHorBarGraph("condition_text");
        }
        else{
          createVisualization("condition_text");
        }
        cat1.style.background="#7da6ff";
        cat2.style.background="#36393f";
        cat3.style.background="#36393f";
  }

}