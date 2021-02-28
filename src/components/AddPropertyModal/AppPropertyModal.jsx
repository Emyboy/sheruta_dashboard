import React, { useState } from 'react'
import Modal from '../Modal'
import SelectCategory from './SelectCategory';

export default function AppPropertyModal(
    {
        show,
        toggle
    }
) {
    const [state, setState] = useState({
        loading: false,
        dispaly: 'select_category',
        category: null
    });

    if (show) {
        return (
            <>
                <Modal show={show} toggle={toggle}>
                    {
                        state.dispaly === 'select_category' ?
                            <SelectCategory state={state} setState={setState} /> : null
                    }
                    <div className="col-12">
                        <div className="form-group">
                            <div className="text-center">
                                <button onClick={toggle} type="submit" className="mt-4 btn gredient-btn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </>
        )
    } else {
        return null
    }
}
