import "./InfoPage.css";

type InfoPageProps = {
  text: string;
}

const InfoPage = ({text}: InfoPageProps) => {

  return (
    <div className="info-page">
      <div className="info-page-text">
        {text}
      </div>
    </div>
    
  )
};

export default InfoPage;