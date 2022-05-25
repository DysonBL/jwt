import React from "react";



const LazyLoad=(importComp,fallback)=>{
 return(
     class extends React.Component{
         state={
             Component:null
         }
    componentDidMount(){
        importComp().then((Comp)=> this.setState({Component:Comp.default}))
    }
    render(){
        const C= this.state.Component;
        return C ? (
             <C {...this.props}/>
             ): fallback ? (
                 fallback
             ):(
                 <h1>Looding..</h1>
             )
    }
     }
 )
  
   
}
export default LazyLoad;