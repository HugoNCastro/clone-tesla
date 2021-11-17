import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelsSection } from '../Model';
import UniqueOverlay from '../Model/UniqueOverlay';
import { Container, Spacer } from './styles';


function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model One",
            "Model Two",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
            "Model Seven",
          ].map(modelName => (
            <ModelsSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order online for Delivery"
                />
              }
            />
          ))}
        </div>
        <Spacer />
        <UniqueOverlay children={undefined} />
      </ModelsWrapper>
    </Container>
  );
};



// import imgModels from './../../assets/Model-S.jpg'

// .colored:nth-child(1) {
//   background: #f1ffe7;
//   background-image: url(${imgModels});
//   width: 100%;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// }
export default Page;
