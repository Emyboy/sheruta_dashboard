import React from 'react'

export default function Title({
    title
}) {
    return (
        <div class="row page-titles">
            <div class="col-md-12 align-self-center">
                <h4 class="theme-cl">{title}</h4>
            </div>
        </div>
    )
}
