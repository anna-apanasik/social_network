import React from 'react';

function FieldGroup({label, type, value, onChange, placeholder, requiredParam, errors, help}) {
    let currentType = type || 'text';
    return (
        <div className="form-group">
            <div className="col-sm-12 col-md-12">
                <label>{label}</label>
                <form className="form-inline">
                    <input type={currentType}
                           className="form-control form-control-sm"
                           value={value}
                           onChange={onChange}
                           placeholder={placeholder}/>
                    <label>{requiredParam ? ' * ' : ''}</label>
                    <span className="badge badge-danger">{errors}</span>
                </form>
                <small className="form-text text-muted ">{help}</small>
            </div>
        </div>
    );
}

export default FieldGroup;