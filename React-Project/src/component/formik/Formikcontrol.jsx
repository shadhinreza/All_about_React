import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import Radio from "./Radio";

const Formikcontrol = (props) => {
    const {control, ...test} = props;
    switch(control){
        case 'input':
            return <Input {...test}/>
        case 'textarea':
            return <Textarea {...test}/>
        case 'radio':
            return <Radio {...test}/>
        case 'select': 
            return <Select {...test}/>
        case 'checkbox': 
        case 'date':
        default: return null
    }
}

export default Formikcontrol;
