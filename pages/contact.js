const {register, handleSubmit, formState: {errors}, reset} = useForm();
const onSubmit = async (data) => {
    setLoading(true);
    setMessage("");
  
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const text = await response.text(); 
      console.log("Raw API Response:", text); 
  
      let result;
      try {
        result = JSON.parse(text); 
      } catch (jsonError) {
        console.error("JSON Parse Error:", jsonError);
        setMessage("Invalid response from server.");
        return;
      }
  
      if (response.ok) {
        setMessage(result.message || "Email sent successfully!");
        setSubmitted(true);
      } else {
        setMessage(result.error || "Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("An error occurred. Please try again.");
    }
  
    setLoading(false);
  };
  