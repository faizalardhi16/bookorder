const response = ({ data, message, status }) => {
  return {
    data: data,
    message: message,
    status: status,
  };
};

export default response;
