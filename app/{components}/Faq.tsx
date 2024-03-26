interface faqtype {
    id: number;
    question: string;
    answer: string;
  }

  const Faq: React.FC<faqtype> = ({ id, question, answer }) => {
  return (
    <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-900">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      <h4 className="font-semibold text-lg lg:text-xl">{question}</h4>
    </div>
    <div className="collapse-content prose"> 
      <p className="text-gray-500">{answer}</p>
    </div>
  </div>
  
</div>
  )
}

export default Faq
