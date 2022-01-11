import React, { useState } from 'react'
import SalvaDadosFormulario from '../../SalvaDadosFormulario';

function Check497() {

	const [{ values, loading }, handleChange, handleSubmit] = SalvaDadosFormulario();

	const getValoresForm = () => {
		console.log(values);
	};

	return (
		<section className="container">
			<form onSubmit={handleSubmit(getValoresForm)}>

				<h1 className="titulo">Elevação de Alvenaria</h1>

				<h2 className="descricao">Planejamento / Modelo</h2>
				<hr />

				<h2 className="descricao">Dados</h2>
				<hr />

				<input type="hidden" value={'Elevação de Alvenaria'} onChange={handleChange}/>
				<div className="agroup_flex">
					<label className="label" htmlFor="data">Data da Inspeção</label>
					<input className="input" type="date" name="data" placeholder='dd/mm/aaaa' onChange={handleChange}/>
				</div>

				<div className="agroup_flex">
					<label className="label" htmlFor="horas">Horas</label>
					<input className="input" type="time" name="horas" placeholder='--:--' onChange={handleChange}/>
				</div>

				<div className="agroup_flex">
					<label className="label" htmlFor="motivoRepracao">Motivo da Reprovação</label>
					<input className="input" type="text" name="motivoRepracao" onChange={handleChange}/>
				</div>

				<div className="agroup_flex">
					<label className="label" htmlFor="acaoCorrecao">Ação da Correção</label>
					<input className="input" type="text" name="acaoCorrecao" onChange={handleChange}/>
				</div>

				<h2 className="descricao">Checklist</h2>
				<hr /><br />

				<table className="iea">
					<tbody>
						<tr>
							<td className="checkTitle">1 - Os pilares e as vigas estão chapiscados? (superfície rugosa e bem aderente)</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-1">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-1" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">2 - A alvenaria de marcação está seguindo as posições especificadas em projeto?	</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-2">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-2" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-2">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-2" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">3 - As dimensões internas dos cômodos estão conforme projeto?	</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-3">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-3">
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-3">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-3" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">4 - As telas, ferros de ancoragem ou chapisco colantes estão sendo colocadas corretamente? (se necessário)	</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-4">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-4" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-4">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-4" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">5 - Existe espaçamento na junta da última fiada? (2 a 3 cm)	</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-5">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-5" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-5">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-5" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">6 - A parede está no prumo?
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-6">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-6" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-6">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-6" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">7 - A parede está plana?
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-7">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-7" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-7">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-7" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">8 - As vergas e contravergas estão niveladas?
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-8">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-8" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-8">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-8" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">9 - As juntas de fixação foram executadas?
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-9">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-9" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-9">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-9" onChange={handleChange}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="checkTitle">10 - Após o serviço, o local deve estar limpo e desimpedido?
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="statusInspecao-10">STATUS DA INSPEÇÃO</label>
									<select className="selecao-iea" name="statusInspecao-10" onChange={handleChange} onClick={handleChange}>
										<option value="conforme">CONFORME</option>
										<option value="naoConforme">NÃO CONFORME</option>
										<option value="na">NA</option>
									</select>
								</div>
							</td>
							<td>
								<div className="div-iea">
									<label className="label-iea" htmlFor="descricao-10">DESCRIÇÃO</label>
									<input className="input-iea" type="text" name="descricao-10" onChange={handleChange}/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

				<button className="send-button" type="submit">{loading ? 'Enviando...' : 'Enviar'}</button>
			</form>
		</section>
	);
}

export default Check497
