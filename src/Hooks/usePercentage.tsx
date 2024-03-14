import { RiArrowLeftDownLine, RiArrowRightUpLine } from "react-icons/ri";

export const PercentageImageSrc = (percentage: number) => {
  if (percentage >= 90) {
    return '../ArrowType/90.png';
  } else if (percentage >= 80) {
    return '../ArrowType/80.png';
  } else if (percentage >=60) {
    return '../ArrowType/60.png';
  } else if (percentage >= 40) {
    return '../ArrowType/40.png';
  } else if (percentage >= 20) {
    return '../ArrowType/20.png';
  }
  return '';
};


export const getColorName = (percentage: number) => {
  if (percentage >= 6 ) {
    return 'Red';
  } else if (percentage >= 4) {
    return 'Orange';
  } else if (percentage >= 2) {
    return 'Green';
  } else {
    return 'Green';
  }
};



export const getStrokeColor = (percentage :number) => {
  if (percentage >= 90) {
    return '#87d068'; // Green color
  } else if (percentage >= 80) {
    return '#87d068'; // Blue color
  } else if (percentage >= 60) {
    return '#ffec3d'; // Yellow color
  } else if (percentage >= 40) {
    return '#faad14'; // Orange color
  } else if (percentage >= 20) {
    return '#f5222d'; // Red color
  } else {
    return '#f5222d'; // Red color
  }
};

export const getPercentageIcon = (percentage :number) => {
   if (percentage >= 60) {
    return <RiArrowRightUpLine/>
  } else if (percentage >= 40) {
    return  <></>; 
  } else {
    return  <RiArrowLeftDownLine/>;
  }
};

export const getPercentageText = (percentage :number) => {
  if (percentage >= 60) {
   return "مرتفع"
 } else if (percentage >= 40) {
   return  "متوسط"; 
 } else {
   return  "منخفض";
 }
};


{/* <RiArrowRightUpLine /> */}

{/* <RiArrowLeftDownLine /> */}