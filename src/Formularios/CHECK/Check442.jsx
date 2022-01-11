import React from 'react'
import '../../css/reset.css';
import '../../css/style.css';

function Check442() {
  return (
    <section className="container">
      <h1 className="titulo">RNC</h1>
      <h2 className="descricao">Planejamento / Modelo</h2>
      <hr />
      <h2 className="descricao">Data</h2>
      <hr />

      <div className="agroup_flex">
        <label className="label" htmlFor="data">Data*</label>
        <input className="input" type="date" name="data" placeholder='dd/mm/aaaa'/>
      </div>

      <div className="agroup_flex">
        <label className="label" htmlFor="horas">Horas*</label>
        <input className="input" type="time" name="horas" placeholder='--:--'/>
      </div>

      <h2 className="descricao">Tipo</h2>
      <hr />
      <div className="agroup_flex">
        <label htmlFor="tipo">Tipo</label>
        <select name="tipo">
          <option value="nadaSelecionado">Nada Selecionado</option>
          <option value="relatorioPreliminar">Relatório Preliminar</option>
          <option value="laudoFinal">Laudo Final</option>
        </select>
      </div>

      <h2 className="descricao">Empresa Afetada</h2>
      <hr />

      <div className="agroup_flex">
        <label className="label" htmlFor="emissora">EMISSORA</label>
        <input className="input" type="text" name="emissora" />
      </div>

      <h2 className="descricao">Categoria</h2>
      <hr />

      <div className="agroup_flex">
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria">
          <option value="nadaSelecionado">Nada Selecionado</option>
          <option value="obrasTerra">Obras de Terra</option>
          <option value="edificacao">Edificação</option>
          <option value="equipamentos">Equipamentos</option>
          <option value="infraestrutura">Infraestrutura</option>
        </select>
      </div>

      <h2 className="descricao">Prioridade</h2>
      <hr />

      <div className="agroup_flex">
        <label htmlFor="prioridade">Prioridade</label>
        <select name="prioridade">
          <option value="nadaSelecionado">Nada Selecionado</option>
          <option value="acima_50_000_00">Acima de R$50.000,00</option>
          <option value="abaixo_50_000_00">Abaixo de R$50.000,00</option>
        </select>
      </div>

      <h2 className="descricao">Descrição da NC</h2>
      <hr />

      <div className="agroup_flex">
        <label className="label" htmlFor="descreva">Descreva</label>
        <input className="input" type="text" name="descreva" />
      </div>

      <h2 className="descricao">Ação Imediata</h2>
      <hr />

      <div className="agroup_flex">
        <label htmlFor="acaoImediata">Imediata</label>
        <select name="acaoImediata">
          <option value="nadaSelecionado">Nada Selecionado</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>

      <h2 className="descricao">Checklist</h2>
      <hr />

      <h2 className="descricao">*</h2>
    </section>  
  );
}

export default Check442
