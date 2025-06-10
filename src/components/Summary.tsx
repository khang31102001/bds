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

            {/* <!-- Main Content --> */}
            <div className="content-grid">
                <div className="content-block">
                    <h3>Property Features</h3>
                    <p>This exceptional rural lifestyle property offers exclusive frontage to the pristine Blackwood River, combining natural beauty with practical agricultural potential.</p>
                    <ul className="highlight-list">
                        <li>Private Blackwood River frontage with deep pools</li>
                        <li>Mature Redgum  Jarrah Blackbutt and River gums trees throughout</li>
                        <li>Wide open fields and treed river flats</li>
                        <li>Private walking trails and camping areas</li>
                        <li>Existing dam with potential for more</li>
                        <li>Power line runs through property</li>
                    </ul>
                </div>

                <div className="content-block">
                    <h3>Investment Opportunity</h3>
                    <p>Currently generating reliable income through an established sheep operation with a proven track record and dependable tenant.</p>
                    <ul className="highlight-list">
                        <li>Annual rent paid in advance each January</li>
                        <li>Fire breaks and water catchment systems</li>
                        <li>Vast potential for development projects</li>
                    </ul>
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