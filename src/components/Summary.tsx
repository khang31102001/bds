const Summary = ()=>{
  return (
    <section id="summary" className="summary-section">
        <div className="summary-header">
            <h1 className="summary-title">Summary For Prime Rural Lifestyle Property</h1>
            <p className="summary-subtitle">Boyup Brook / Bridgetown, Western Australia</p>
        </div>
        
        <div className="summary-content">
            {/* <!-- Key Metrics --> */}
            <div className="key-metrics">
                <div className="metric">
                    <div className="metric-number">301</div>
                    <div className="metric-label">Acres</div>
                </div>
                <div className="metric">
                    <div className="metric-number">121</div>
                    <div className="metric-label">Hectares</div>
                </div>
                <div className="metric">
                    <div className="metric-number">$</div>
                    <div className="metric-label">Investment Cash flow</div>
                </div>
            </div>


            {/* <!-- Value Proposition --> */}
            <div className="value-proposition">
                <p>
                    <strong>Rare Opportunity:</strong> This property uniquely combines immediate income generation with exceptional development potential. Whether you're seeking a private rural retreat, agricultural investment, or development project, this land offers the perfect foundation in one of Western Australia's most beautiful regions.
                </p>
            </div>
        </div>

    </section>
  )
}

export default Summary;