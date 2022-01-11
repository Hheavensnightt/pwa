import React from 'react'
import Check442 from '../../Formularios/CHECK/Check442';
import Check497 from '../../Formularios/CHECK/Check497';
import Rdo1 from '../../Formularios/RDO/Rdo1';
import tipos from '../../tipos.json';

function EscolheFormulario() {
	const [aplicativo, setAplicativo] = React.useState('');
	const [formulario, setFormulario] = React.useState('');
	const [opcoes, setOpcoes] = React.useState([]);

	const formularios = [
		<Check442/>,
		<Check497/>,
		<Rdo1/>
	];

	function getTipos(e){
		const json = tipos;
		for(let i=0;i<json.length;i++){
			if(json[i].aplicativo.value===e){
				setOpcoes(json[i].nomeForm);
			}
		}
	}

	function Options({ options }) {
		return (
			options.map(option => 
				<option key={option.value} value={option.value}>                                   
					{option.label}
				</option>)
		);
	}
	
	function handleAplicativo(e){
		getTipos(e);
		setAplicativo(e);
	}

	function handleFormulario(e){
		setFormulario(e);
		// console.log(e);
	}

	return (
		<section>
			<div className="container-opcoes">
				<label htmlFor="selecionarApp">Selecione o Aplicativo</label>
				<select name="selecionarApp" onClick={(e)=>handleAplicativo(e.target.value)} onChange={(e)=>handleAplicativo(e.target.value)}>
					<option value="nadaSelecionado">Nada Selecionado</option>
					<option value="rdo">RDO</option>
					<option value="rnc">RNC</option>
					<option value="check">CHECK</option>
					<option value="rdf">RDF</option>
				</select>
			</div>

			<div className="container-opcoes">
				<label htmlFor="selecionarFormulario">Selecione o Formulário</label>
				<select
					name="selecionarFormulario" value={formulario} onChange={(e)=>handleFormulario(e.target.value)} onClick={(e)=>handleFormulario(e.target.value)}>
					<Options options={opcoes} />
				</select>	
			</div> 
			<div>
				{
					formularios.map(item => {
						// console.log(item.type.name)
						if(item.type.name === formulario){
							// console.log(formulario);
							return (
								<React.Fragment key={formulario}>
									{[item]}
								</React.Fragment>
							)
						}
					})
				}
			</div>
		</section>
	)
}

export default EscolheFormulario
