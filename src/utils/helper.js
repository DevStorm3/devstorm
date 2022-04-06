import { notification } from "antd";

const endpoint = process.env.REACT_APP_IMAGE_URL || "https://assets.chillfitrave.com/";
const noImage = "/images/Rectangle5.png";
export const getImage = (image) => {
  if (!image) return noImage;
  return endpoint + image;
};

const noImageuser = "/img/user.jpeg";
export const getImageUser = (image) => {
  if (!image) return noImageuser;
  return endpoint + image;
};

export const showNotification = (data) => {
  if (data.success) {
    notification.success({
      message: data.message,
      placement: "bottomLeft",
    });
  } else {
    notification.error({
      message: data.message,
      placement: "bottomLeft",
    });
  }
};

export const checkEmptyData = (data) => {
  let result = data;
  if (!data.phone) {
    delete result.phone;
  }
  if (!data.age) {
    delete result.age;
  }
  if (!data.gender) {
    delete result.gender;
  }
  if (!data.zipCode) {
    delete result.zipCode;
  }
  if (!data.timeZone) {
    delete result.timeZone;
  }

  return result;
};


export const AddressFormatter = (data) => {
  let address = "";
  if (data?.address) {
    address = address.concat(data?.address);
  }
  if(data?.apertment){
    address = address.concat(" ", data?.apertment);
  }
  if (data?.city) {
    address = address.concat(", ", data.city);
  }
  if (data?.state) {
    address = address.concat(", ", data.state);
  }
  if (data?.zipCode) {
    address = address.concat("-", data.zipCode);
  }
  address = address.concat(", ", 'US');
  // if (data?.country) {
  //   address = address.concat(", ", 'US');
  // }
  return address;
};