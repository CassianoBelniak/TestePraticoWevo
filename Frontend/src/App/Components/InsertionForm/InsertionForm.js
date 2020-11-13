import React, { Component } from "react";
import "./InsertionForm.css";

class InsertionForm extends Component {
  clear_state = {
    id: -1,
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthday: this.formatDate(Date()),
    sexId: 1,
  };
  constructor(props) {
    super(props);
    if (props.editUser === null) {
      this.state = this.clear_state;
      this.submitButtonLabel = "Cadastrar";
    } else {
      this.state = props.editUser;
      this.submitButtonLabel = "Salvar";
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editUser === null) {
      this._clear();
    } else {
        console.log(nextProps)
      this.submitButtonLabel = "Salvar";
      this.setState(nextProps.editUser);
      this.setState({cpf:this.mCPF(nextProps.editUser.cpf)})
    }
  }

  _onSubmit() {
    var user = {
        id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      cpf: this.state.cpf,
      phone: this.state.phone,
      birthday: this.state.birthday,
      sexId: parseInt(this.state.sexId),
    };
    console.log(user);
    if (this.validateFields(user)) {
      if (this.state.id === -1) {
        this.props.onUserCreated(user);
      } else {
        this.props.onUserEdited(user);
      }
    }
  }

  validateFields(user) {
    var result = true;
    this.setState({
                    error_name:"",
                    error_email:"",
                    error_cpf:"",
                    error_phone:"",
                    error_sex:""
                  })
    if (user.name.length === 0) {
        this.setState({error_name:"Nome não preenchido"})
        result = false;
    }
    if (user.email.length === 0) {
        this.setState({error_email:"Email não preenchido"})
        result = false;
    }
    if (!user.email.includes('@')){
        this.setState({error_email:"O e-mail é inválido"})
        result = false;
    }
    if (user.cpf.length !== 14) {
        this.setState({error_cpf:"CPF não preenchido corretamente"})
        result = false;
    }
    if (user.phone.length === 0) {
        this.setState({error_phone:"Telefone não preenchido"})
        result = false;
    }
    if (user.sexId === 0) {
        this.setState({error_sex:"Sexo não preenchido"})
        result = false;
    }

    return result;
  }

    mTel(tel) {
        tel=tel.replace(/\D/g,"")
        tel=tel.replace(/^(\d)/,"($1")
        tel=tel.replace(/(.{3})(\d)/,"$1)$2")
        if(tel.length === 9) {
            tel=tel.replace(/(.{1})$/,"-$1")
        } else if (tel.length === 10) {
            tel=tel.replace(/(.{2})$/,"-$1")
        } else if (tel.length === 11) {
            tel=tel.replace(/(.{3})$/,"-$1")
        } else if (tel.length === 12) {
            tel=tel.replace(/(.{4})$/,"-$1")
        } else if (tel.length > 12) {
            tel=tel.replace(/(.{4})$/,"-$1")
        }
        return tel;
    }
    mCPF(cpf){
        if (cpf === undefined)
            return ""
        cpf=cpf.replace(/\D/g,"")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
        cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
        return cpf
    }

  formatDate(date) {
    date = new Date(date)
    return new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
  }

  _onClear() {
    this._clear();
  }

  _clear() {
    this.setState(this.clear_state);
    this.submitButtonLabel = "Cadastrar";
  }

  _onChange(fieldName) {
    return function (event) {
        var value = event.target.value;
        if (fieldName === 'CPF')
            value = this.mCPF(value);
        if (fieldName === 'phone')
            value = this.mTel(value);
      this.setState({ [fieldName]: value });
    };
  }

  _renderClearButton() {
    if (this.state.id !== -1)
      return (
        <button type="button" onClick={this._onClear.bind(this)}>
          Limpar
        </button>
      );
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form className="Insertion-form_form" onSubmit={this.handleSubmit}>
        <h3>Inserir novo usuário</h3>
        <div>
          <label>Nome: </label>
          <input
            type="text"
            placeholder="nome..."
            value={this.state.name}
            onChange={this._onChange("name").bind(this)}
          ></input>
          <div className="Insertion-form_error">{this.state.error_name}</div>
        </div>
        <div>
          <label>E-mail: </label>
          <input
            type="email"
            placeholder="email..."
            value={this.state.email}
            onChange={this._onChange("email").bind(this)}
          ></input>
          <div className="Insertion-form_error">{this.state.error_email}</div>
        </div>
        <div>
          <label>CPF: </label>
          <input
            type="text"
            placeholder="CPF..."
            value={this.mCPF(this.state.cpf)}
            onChange={this._onChange("cpf").bind(this)}
          ></input>
          <div className="Insertion-form_error">{this.state.error_cpf}</div>
        </div>
        <div>
          <label>Telefone: </label>
          <input
            type="text"
            placeholder="telefone..."
            value={this.state.phone}
            onChange={this._onChange("phone").bind(this)}
          ></input>
          <div className="Insertion-form_error">{this.state.error_phone}</div>
        </div>
        <div>
          <label>Data de Nascimento: </label>
          <input
            type="date"
            placeholder="data de nascimento..."
            value={this.formatDate(this.state.birthday)}
            onChange={this._onChange("birthday").bind(this)}
          ></input>
          <div className="Insertion-form_error">{this.state.error_birthday}</div>
        </div>
        <div>
          <label>Sexo: </label>
          <select
            value={this.state.sexId}
            onChange={this._onChange("sexId").bind(this)}
          >
            <option value="1">Feminino</option>
            <option value="2">Masculino</option>
            <option value="3">Não informado</option>
          </select>
          <div className="Insertion-form_error">{this.state.error_sex}</div>
        </div>
        <div>
          <button type="button" onClick={this._onSubmit.bind(this)}>
            {this.submitButtonLabel}
          </button>
          {this._renderClearButton()}
        </div>
      </form>
    );
  }
}

export default InsertionForm;
