import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
                        background-color: ${props => props.alt ? 'red' : 'green'};
                        color:white;
                        font: inherit;
                        border: 1px solid blue;
                        boxShadow: 0px 2px 3px  #ccc;
                        border-radius: 5px;
                        padding: 8px;
                        cursor: pointer;
                        &:hover {
                        background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
                        color: white;

                    `;
export default StyledButton;

