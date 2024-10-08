// BaseNode.js
import React from 'react';
import {Handle} from 'reactflow';
import {useThemeStore} from '../store';

export const BaseNode = ({id, data, type, handles = []}) => {
	const {isDarkMode} = useThemeStore();

	return (
		<div
			id={id}
			style={{
				width: '200px',
				height: 'auto',
				border: '1px solid black',
				padding: '10px',
				position: 'relative',
				borderRadius: '10px',
				background: isDarkMode ? '#c8b6fffa' : '#f9f9f9'
			}}>
			<div style={{marginBottom: '10px', fontWeight: 'bold'}}>{data.label}</div>
			<div>{data.content}</div>
			{handles.map((handle, index) => (
				<div
					key={index}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: handle.position === 'left' ? 'flex-start' : 'flex-end',
						position: 'absolute',
						top: `${handle.position === 'right' ? index + 50 : index * 30}px`,
						[handle.position]: '-10px'
					}}>
					<Handle
						type={handle.type}
						position={handle.position}
						id={handle.id}
						style={{margin: '10px', display: 'flex', alignItems: 'center', justifyContent: 'end'}}>
						{handle.title && (
							<span
								className={`${isDarkMode ? 'text-white' : 'text-black'}`}
								style={{fontSize: '12px', marginRight: '10px'}}>
								{handle.title}
							</span>
						)}
					</Handle>
				</div>
			))}
		</div>
	);
};
