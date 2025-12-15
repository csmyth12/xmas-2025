import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";

const Question1 = () => {
  return (
    <Layout>
      <Form questionNumber={1} question="What's your name?" answer="Holly" />
    </Layout>
  );
};

export default Question1;
