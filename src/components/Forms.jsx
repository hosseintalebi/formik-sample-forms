import React, { useState } from "react";

// Components
import { TabBar, Tab } from "rmwc";
import ComparisonTable from "./ComparisonTable";
import SyntaxHighlight from "./syntax-highlight/SyntaxHighligh";

// Formik Forms
import SimpleFormFormik from "./formik/SimpleForm";
import FormWithYupFormik from "./formik/FormWithYup";
import FormWithFetchFormik from "./formik/FormWithFetch";
import FormWithDynamicInputFormik from "./formik/FormWithDynamicInput";
import WizardFormik from "./formik/Wizard";

// React Final Forms
import SimpleFormRFF from "./react-final-form/SimpleForm";
import FormWithFetchRFF from "./react-final-form/FormWithFetch";
import FormWithDynamicInputRFF from "./react-final-form/FormWithDynamicInput";

// Sourc String Formik
import simpleFormCodeFormik from "./syntax-highlight/formik/simpleForm";
import formWithYupFormik from "./syntax-highlight/formik/formWithYup";
import formWithFetchFormik from "./syntax-highlight/formik/formWithFetch";
import formWithDynamicInputFormik from "./syntax-highlight/formik/formWithDynamicInput";
import wizardFormik from "./syntax-highlight/formik/wizard";

// Sourc String React Final Form
import simpleFormCodeRFF from "./syntax-highlight/react-final-form/simpleForm";
import formWithFetchRFF from "./syntax-highlight/react-final-form/formWithFetch";
import formWithDynamicInputRFF from "./syntax-highlight/react-final-form/formWithDynamicInput";

// Styles
const styles = {
  table: {
    margin: "20px 10px 50px"
  },
  titleWapper: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontSize: 28,
    lineHeight: "28px",
    fontWeight: 600,
    marginBottom: 15,
    width: "100%",
    color: "#252942",
    textAlign: "left"
  },
  subtitle: {
    fontSize: 18,
    lineHeight: "28px",
    width: "100%",
    color: "#252942",
    textAlign: "left"
  },
  formAndCodeWrapper: {
    background: "#fafafa",
    display: "flex",
    margin: "30px 0 60px",
    position: "relative",
    flexDirection: "column"
  },
  formAndCode: {
    display: "flex",
    flexWrap: "nowrap",
    width: "100%"
  },
  formWrapper: {
    justifyContent: "flex-end",
    minHeigh: 250,
    overflow: "hidden",
    margin: 20
  },
  form: {
    flex: "0 1 450px",
    maxWidth: "450px",
    display: "flex",
    perspective: "500px",
    alignItems: "center",
    justifyContent: "center"
  },
  codeWrapper: {
    justifyContent: "flex-end",
    minHeigh: 250,
    overflow: "hidden",
    margin: "0px 10px 0px 50px"
  },
  code: {
    flex: "0 1 100%",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  tabBar: nTabs => ({
    margin: "0 0 -8px auto",
    width: nTabs === 1 ? 160 : 320
  })
};

const Forms = () => {
  return (
    <div>
      <div style={styles.table}>
        <ComparisonTable />
      </div>
      <FormRender
        title="Simple form"
        subtitle="Just a simple example of a form with validation."
        formikForm={<SimpleFormFormik />}
        rffForm={<SimpleFormRFF />}
        formikCode={
          <SyntaxHighlight
            codeString={simpleFormCodeFormik}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/SimpleForm.jsx"
          />
        }
        rffCode={
          <SyntaxHighlight
            codeString={simpleFormCodeRFF}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/react-final-form/SimpleForm.jsx"
          />
        }
      />
      <FormRender
        title="Form with schema validation"
        subtitle="You can combine normal validation with schema validation using Yup."
        formikForm={<FormWithYupFormik />}
        formikCode={
          <SyntaxHighlight
            codeString={formWithYupFormik}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/FormWithYup.jsx"
          />
        }
      />
      <FormRender
        title="Form with network request"
        subtitle="Fetch data based on the value of certain input."
        formikForm={<FormWithFetchFormik />}
        rffForm={<FormWithFetchRFF />}
        formikCode={
          <SyntaxHighlight
            codeString={formWithFetchFormik}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/FormWithFetch.jsx"
          />
        }
        rffCode={
          <SyntaxHighlight
            codeString={formWithFetchRFF}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/FormWithFetch.jsx"
          />
        }
      />
      <FormRender
        title="Dynamic form"
        subtitle="Add new inputs dynamically to the form."
        formikForm={<FormWithDynamicInputFormik />}
        rffForm={<FormWithDynamicInputRFF />}
        formikCode={
          <SyntaxHighlight
            codeString={formWithDynamicInputFormik}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/FormWithDynamicInput.jsx"
          />
        }
        rffCode={
          <SyntaxHighlight
            codeString={formWithDynamicInputRFF}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/FormWithFetch.jsx"
          />
        }
      />
      <FormRender
        title="Form wizard"
        subtitle="Multi step form with validation."
        formikForm={<WizardFormik />}
        formikCode={
          <SyntaxHighlight
            codeString={wizardFormik}
            codeUrl="https://github.com/hosseintalebi/formik-vs-react-final-form/blob/master/src/components/formik/Wizard.jsx"
          />
        }
      />
    </div>
  );
};

const FormRender = ({
  title,
  subtitle,
  formikForm,
  rffForm,
  formikCode,
  rffCode
}) => {
  const [activeTab, setActiveTab] = useState(0);
  const hasFormik = formikCode != null;
  const hasRFF = rffCode != null;
  const tabs = getTabs({ hasFormik, hasRFF });
  const form = activeTab === 0 && hasFormik ? formikForm : rffForm;
  const code = activeTab === 0 && hasFormik ? formikCode : rffCode;

  return (
    <div style={styles.item}>
      <div style={styles.titleWapper}>
        <div style={styles.title}>{title}</div>
        <div style={styles.subtitle}>{subtitle}</div>
      </div>
      <div style={styles.formAndCodeWrapper}>
        <TabBar
          style={styles.tabBar(tabs.length)}
          activeTabIndex={activeTab}
          onActivate={evt => setActiveTab(evt.detail.index)}
        >
          {tabs}
        </TabBar>
        <div style={styles.formAndCode}>
          <div style={styles.formWrapper}>
            <div style={styles.form}>{form}</div>
          </div>
          <div style={styles.codeWrapper}>
            <div style={styles.code}>{code}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getTabs = ({ hasFormik, hasRFF }) => {
  const tabs = [];
  hasFormik && tabs.push(<Tab>Formik</Tab>);
  hasRFF && tabs.push(<Tab>React Final Form</Tab>);
  return tabs;
};

export default Forms;
