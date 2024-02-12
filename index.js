
function show_cat(data_num)
{
  current_active = data_num;

  let is_direction = direction_toogle.checked;
  console.log(direction_toogle.checked);
  let cat1,cat2,cat3;
  cat1=document.getElementById("cat1");
  cat2=document.getElementById("cat2");
  cat3=document.getElementById("cat3");
  //numerical
  cat4=document.getElementById("cat4");
  cat5=document.getElementById("cat5");
  cat6=document.getElementById("cat6");
  cat7=document.getElementById("cat7");
  cat8=document.getElementById("cat8");
  cat9=document.getElementById("cat9");
  cat10=document.getElementById("cat10");
  cat11=document.getElementById("cat11");
  cat12=document.getElementById("cat12");
  cat13=document.getElementById("cat13");
  cat14=document.getElementById("cat14");
  cat15=document.getElementById("cat15");
  
  let rad1,rad2,rad3;
  rad1=document.getElementById("condition_text");
  rad2=document.getElementById("wind_direction");
  rad3=document.getElementById("moon_phase");
  //numerical
  rad4=document.getElementById("temperature_celsius");
  rad5=document.getElementById("feels_like_celsius");
  rad6=document.getElementById("humidity");
  rad7=document.getElementById("uv_index");
  rad8=document.getElementById("wind_kph");
  rad9=document.getElementById("gust_kph");
  rad10=document.getElementById("pressure_in");
  rad11=document.getElementById("visibility_km");
  rad12=document.getElementById("air_quality_Ozone");
  rad13=document.getElementById("air_quality_Carbon_Monoxide");
  rad14=document.getElementById("air_quality_Nitrogen_dioxide");
  rad15=document.getElementById("air_quality_Sulphur_dioxide");
  
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
      break;
    case 4:
    rad4.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("temperature_celsius");
    }
    else{
      createHistogram("temperature_celsius");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#7da6ff";
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
    break;
    case 5:
    rad5.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("feels_like_celsius");
    }
    else{
      createHistogram("feels_like_celsius");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#7da6ff";
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
    break;
    case 6:
    rad6.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("humidity");
    }
    else{
      createHistogram("humidity");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#36393f";
    cat6.style.background="#7da6ff";
    cat7.style.background="#36393f";
    cat8.style.background="#36393f";
    cat9.style.background="#36393f";
    cat10.style.background="#36393f";
    cat11.style.background="#36393f";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 7:
    rad5.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("uv_index");
    }
    else{
      createHistogram("uv_index");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#36393f";
    cat6.style.background="#36393f";
    cat7.style.background="#7da6ff";
    cat8.style.background="#36393f";
    cat9.style.background="#36393f";
    cat10.style.background="#36393f";
    cat11.style.background="#36393f";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 8:
    rad8.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("wind_kph");
    }
    else{
      createHistogram("wind_kph");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#36393f";
    cat6.style.background="#36393f";
    cat7.style.background="#36393f";
    cat8.style.background="#7da6ff";
    cat9.style.background="#36393f";
    cat10.style.background="#36393f";
    cat11.style.background="#36393f";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 9:
    rad9.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("gust_kph");
    }
    else{
      createHistogram("gust_kph");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#36393f";
    cat6.style.background="#36393f";
    cat7.style.background="#36393f";
    cat8.style.background="#36393f";
    cat9.style.background="#7da6ff";
    cat10.style.background="#36393f";
    cat11.style.background="#36393f";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 10:
    rad10.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("pressure_in");
    }
    else{
      createHistogram("pressure_in");
    }
    cat1.style.background="#36393f";
    cat2.style.background="#36393f";
    cat3.style.background="#36393f";
    cat4.style.background="#36393f";
    cat5.style.background="#36393f";
    cat6.style.background="#36393f";
    cat7.style.background="#36393f";
    cat8.style.background="#36393f";
    cat9.style.background="#36393f";
    cat10.style.background="#7da6ff";
    cat11.style.background="#36393f";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 11:
    rad11.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("visibility_km");
    }
    else{
      createHistogram("visibility_km");
    }
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
    cat11.style.background="#7da6ff";
    cat12.style.background="#36393f";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 12:
    rad12.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("air_quality_Ozone");
    }
    else{
      createHistogram("air_quality_Ozone");
    }
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
    cat12.style.background="#7da6ff";
    cat13.style.background="#36393f";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 13:
    rad13.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("air_quality_Carbon_Monoxide");
    }
    else{
      createHistogram("air_quality_Carbon_Monoxide");
    }
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
    cat13.style.background="#7da6ff";
    cat14.style.background="#36393f";
    cat15.style.background="#36393f";
    break;
    case 14:
    rad14.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("air_quality_Nitrogen_dioxide");
    }
    else{
      createHistogram("air_quality_Nitrogen_dioxide");
    }
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
    cat14.style.background="#7da6ff";
    cat15.style.background="#36393f";
    break;
    case 15:
    rad15.checked=true;
    if(is_direction)
    {
      createHorizontalHistogram("air_quality_Sulphur_dioxide");
    }
    else{
      createHistogram("air_quality_Sulphur_dioxide");
    }
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
    cat15.style.background="#7da6ff";
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