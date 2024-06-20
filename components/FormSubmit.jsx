import React from "react";

const FormSubmit = ({ handleSubmit, submitting, isSubmitted }) => {
	return submitting ? (
		<span className="loading loading-ring loading-lg"></span>
	) : (
		<button
			className="btn btn-primary lg:w-36"
			onClick={handleSubmit}
			disabled={isSubmitted}
		>
			{isSubmitted ? "Saved to Profile" : "Save to Profile"}
		</button>
	);
};

export default FormSubmit;
