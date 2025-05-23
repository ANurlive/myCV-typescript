const getEducationData = async () => {
  try {
    const response = await fetch("/api/educations");
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(
      "Something went wrong; please review your server connection!"
    );
  }
};
export default getEducationData;
