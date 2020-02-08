var React = require('react')
import styled from 'styled-components';

class Modal extends React.Component{
  render () {

    const Modal = styled.div`
        display: ${this.props.modalDisplay};
    `;

    return (
        <Modal 
            className='modal'>
            <section 
                className='modal-main color-background_primary'>
                {this.props.children}
                <button
                    onClick={this.props.handleClose}>
                    close
                </button>
            </section>
        </Modal>
    );
  }
}
  export default Modal;
