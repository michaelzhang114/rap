import React from "react";

const FAQ = () => {
	const FAQs = [
		{
			id: 1,
			question:
				"How is the AI generating lyrics in the style of rappers?",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia consectetur est eveniet perferendis, optio quasi rerum. Repellat, numquam nobis?",
		},
		{
			id: 2,
			question: "Are the generated rap lyrics unique?",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia consectetur est eveniet perferendis, optio quasi rerum. Repellat, numquam nobis?",
		},
		{
			id: 3,
			question: "Can you use the generated lyrics commercially?",
			answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia consectetur est eveniet perferendis, optio quasi rerum. Repellat, numquam nobis?",
		},
	];

	return (
		<section className="bg-yellow-200">
			<article className="prose lg:prose-xl mb-4">
				<h2>Frequently Asked Questions:</h2>
			</article>

			{FAQs.map((faq) => (
				<div
					className="collapse collapse-arrow bg-base-200"
					key={faq.id}
				>
					<input type="radio" name={`my-accordion-2`} />
					<div className="collapse-title text-xl font-medium">
						{faq.question}
					</div>
					<div className="collapse-content">{faq.answer}</div>
				</div>
			))}
		</section>
	);
};

export default FAQ;
