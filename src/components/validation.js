const validation=(values)=>{
    let errors={};
    if(!values.fullname){
        errors.fullname="name is required"
    }
    if(!values.email){
        errors.email="email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="email is required"
    }
    if(!values.password){
        errors.password="password is required"
    } else if(values.password.length <5){
        errors.password="password is required more than five"
    }
    return errors;
    
}
export default validation