interface CurrencyRowProps {
    label: string;
}

function CurrencyRow({label}: CurrencyRowProps) {
    return (
        <>
            <div className='item'>{label}</div>
            <div className='item'></div>
            <div className='item'></div>
            <div className='item'></div>
        </>
    );
}

export default CurrencyRow;