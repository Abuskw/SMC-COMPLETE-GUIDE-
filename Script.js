// 1. LESSON DATA STORAGE (Updated to use 'html' for better formatting)

const lessons = {

  "Order Block": {

    html: `<p style="text-align: center;">&nbsp;<b>Order Block</b>&nbsp;</p><p style="text-align: left;">Order Block Is an institutional&nbsp; areas Where Large Institutions place their buy/sell orders. And price is more likely to reverse at that areas.&nbsp;</p><p style="text-align: left;"><u><b>An order Block most has the following before it would consider as valid:</b></u></p><p style="text-align: left;"></p><ul style="text-align: left;"><li>Liquidity most be sweept before the order Block was formed.&nbsp;</li><li>A fear value gap was formed after the order Block&nbsp;</li><li>Price shows Momentum/displacement after the order Block was formed, eg.</li></ul>Image<p></p><p style="text-align: center;"><u>Types of order Block&nbsp;</u><span><br /></span><span></span></p><p style="text-align: left;"></p><ol style="text-align: left;"><li><b>Candle base order Block</b>: is the last opposing Candle before strong impulsive move that breaks market structure,usually it consists of three candles. Eg.&nbsp;</li></ol>Image&nbsp;<p></p><p style="text-align: left;"></p><ul style="text-align: left;"><li>Note: in an uptrend the last bearish Candle will be mark as the order Block</li><li>Note :in down trend only the last bullish Candle will be mark as the order Block, eg.</li></ul>Image&nbsp;<p></p><p style="text-align: left;">&nbsp; &nbsp; &nbsp; &nbsp;2. <b>Breaker Block</b>:it occurs when price invalidates a previous order Block during a Liquidity grab, signaling a potential reversal.</p><p style="text-align: left;">Image&nbsp;</p><p style="text-align: left;">&nbsp; &nbsp; &nbsp; &nbsp; 3. <b>Midtrend order Block</b>:they appear during trend continuation, it formed in a middle of an uptrend with red Candle or down trend with bullish Candle. Eg,</p><p style="text-align: left;">Image&nbsp;</p><p style="text-align: left;">&nbsp; &nbsp; &nbsp; &nbsp; 4. <b>Rejection order Block</b>: when price fails to move higher (bearish) or lower (bullish) leaving a large Candle weak,eg.</p><p style="text-align: left;">Image&nbsp;</p><p style="text-align: left;"><br /></p><p style="text-align: left;"><br /></p><p style="text-align: left;"><br /></p><p style="text-align: center;"><br /></p>.`,

    img: "https://i.imgur.com/2tvr8i0.jpeg"
  },

"Liquidity": {
  html: `<p>&nbsp;In Smart Money Concepts (SMC), liquidity is the most critical element because it explains why price moves from point A to point B. Market makers and institutional banks have orders so large that they cannot simply click "buy" or "sell" without moving the price against themselves.</p><p>​To fill these massive orders, they need a high volume of opposing orders—this is Liquidity.</p><p>​1<b>. The Core Concept: Price is a Magnet</b></p><p>​In SMC, we assume price moves for two reasons:</p><p>​To rebalance an inefficiency (Fair Value Gaps/FVG).</p><p>​To "run" liquidity (seek out stop losses).</p><p>​Think of liquidity as "fuel." The market needs to hit a pool of stop losses to generate enough sell orders to fuel a massive buy move (and vice-versa).</p><p>​2. <b>Types of SMC Liquidity</b></p><p>​When looking at your TradingView-style charts, you are searching for these specific patterns where retail traders "hide" their money.</p><p>​<b>External Range Liquidity (ERL)</b></p><p>​This sits at the "edges" of the current price action.</p><p>​Old Highs / Old Lows: Major swing points on higher timeframes (H4, Daily).</p><p>​PDH / PDL: Previous Day High and Previous Day Low.</p><p>​PWH / PWL: Previous Week High and Previous Week Low.</p><p><b>Internal Range Liquidity (IRL)</b></p><p>​This sits inside the current price swing.</p><p>​Fair Value Gaps (FVG): Areas where price moved so fast it left a "hole" in the market.</p><p>​Small Swing Points: Minor highs and lows created during a trend.</p><p>​<b>Engineered Liquidity</b></p><p>​This is the "trap" set for retail traders.</p><p>​Equal Highs (EQH) / Equal Lows (EQL): Retail calls this "Double Tops/Bottoms." SMC traders see this as a massive pool of money waiting to be swept.</p><p>​Trendline Liquidity (TLL): Retail traders buy/sell every time price touches a diagonal line. Their stops are trailing right behind that line, creating a "trail" of liquidity.</p><p><b>The SMC Liquidity Cycle</b></p><p>​The ma<p>&nbsp;In Smart Money Concepts (SMC), liquidity is the most critical element because it explains why price moves from point A to point B. Market makers and institutional banks have orders so large that they cannot simply click "buy" or "sell" without moving the price against themselves.</p><p>​To fill these massive orders, they need a high volume of opposing orders—this is Liquidity.</p><p>​1<b>. The Core Concept: Price is a Magnet</b></p><p>​In SMC, we assume price moves for two reasons:</p><p>​To rebalance an inefficiency (Fair Value Gaps/FVG).</p><p>​To "run" liquidity (seek out stop losses).</p><p>​Think of liquidity as "fuel." The market needs to hit a pool of stop losses to generate enough sell orders to fuel a massive buy move (and vice-versa).</p><p>​2. <b>Types of SMC Liquidity</b></p><p>​When looking at your TradingView-style charts, you are searching for these specific patterns where retail traders "hide" their money.</p><p>​<b>External Range Liquidity (ERL)</b></p><p>​This sits at the "edges" of the current price action.</p><p>​Old Highs / Old Lows: Major swing points on higher timeframes (H4, Daily).</p><p>​PDH / PDL: Previous Day High and Previous Day Low.</p><p>​PWH / PWL: Previous Week High and Previous Week Low.</p><p><b>Internal Range Liquidity (IRL)</b></p><p>​This sits inside the current price swing.</p><p>​Fair Value Gaps (FVG): Areas where price moved so fast it left a "hole" in the market.</p><p>​Small Swing Points: Minor highs and lows created during a trend.</p><p>​<b>Engineered Liquidity</b></p><p>​This is the "trap" set for retail traders.</p><p>​Equal Highs (EQH) / Equal Lows (EQL): Retail calls this "Double Tops/Bottoms." SMC traders see this as a massive pool of money waiting to be swept.</p><p>​Trendline Liquidity (TLL): Retail traders buy/sell every time price touches a diagonal line. Their stops are trailing right behind that line, creating a "trail" of liquidity.</p><p><b>The SMC Liquidity Cycle</b></p><p>​The market generally follows a specific "delivery" cycle:</p><p>​Consolidation: Price stays in a tight range, building up liquidity on both sides (EQH and EQL).</p><p>​Manipulation (The Sweep): Price makes a sudden move to break the high or low, hitting everyone's stop losses. This is often called a "Judas Swing."</p><p>​Expansion / Displacement: Once the liquidity is grabbed, price moves aggressively in the actual intended direction, often leaving an FVG behind.</p><p>​<b>How to Trade It (The Logic)</b></p><p>​Instead of trading with the retail crowd at support and resistance, an SMC trader waits for the crowd to get stopped out.</p><p>​Step 1: Identify a pool of liquidity (e.g., Equal Lows).</p><p>​Step 2: Wait for price to sweep below those lows.</p><p>​Step 3: Look for a Market Structure Shift (MSS) on a lower timeframe.</p><p>​Step 4: Enter on the return to the "Order Block" or "FVG" created during the sweep</p>rket generally follows a specific "delivery" cycle:</p><p>​Consolidation: Price stays in a tight range, building up liquidity on both sides (EQH and EQL).</p><p>​Manipulation (The Sweep): Price makes a sudden move to break the high or low, hitting everyone's stop losses. This is often called a "Judas Swing."</p><p>​Expansion / Displacement: Once the liquidity is grabbed, price moves aggressively in the actual intended direction, often leaving an FVG behind.</p><p>​<b>How to Trade It (The Logic)</b></p><p>​Instead of trading with the retail crowd at support and resistance, an SMC trader waits for the crowd to get stopped out.</p><p>​Step 1: Identify a pool of liquidity (e.g., Equal Lows).</p><p>​Step 2: Wait for price to sweep below those lows.</p><p>​Step 3: Look for a Market Structure Shift (MSS) on a lower timeframe.</p><p>​Step 4: Enter on the return to the "Order Block" or "FVG" created during the sweep</p>.` ,
img: "https://i.imgur.com/fEPeh4d.jpeg" 
  },
 
  "Fair Value Gap":{  
  html: `<p style="text-align: center;">&nbsp;<b>Fair Value Gap</b>&nbsp;</p><p style="text-align: left;">A fair value gap (FVG): is a trading concept representing a price imbalance create when market moves rapidly leaving a gap between the wicks of the first and third Candle in a three candle sequence. Eg.</p><p style="text-align: left;">Image&nbsp;</p><p style="text-align: center;"><b>Identification</b></p><p style="text-align: left;">Look for three consecutive candles. A bullish FVG occurs when the second (middle) candle is large, and the third candle's low is higher than the first candle's high. A bearish FVG occurs when the third candle's high is lower than the first candle's low.</p><p style="text-align: left;"><b>In an uptrend</b>: fair Value Gap is formed when three bullish candles form with gap between the first and the third Candle. Eg</p><p style="text-align: left;">Image&nbsp;</p><p style="text-align: left;"><b>In down trend</b>: fair Value Gap is formed when three bearish Candles form with gap between the first and third Candle. Eg.</p><p style="text-align: left;">Image&nbsp;</p>.`,
  img: "https://i.imgur.com/iQ6NWZ0.png"

  },
    "Inducement":{
html: `<p>&nbsp;<b>Inducement in Trading (Smart Money Concept) 🎯</b></p><p>Inducement is a concept used in Smart Money trading (SMC).</p><p>It means the market tricks traders into entering positions in the wrong place before the real move happens.</p><p>In simple words:</p><p>👉 The market lures traders to buy or sell so that big institutions can take their liquidity.</p><p>1. <b>Simple Meaning of Inducement</b></p><p>Inducement is when price creates a setup that looks perfect, so many traders enter the market.</p><p>But the move is not the real move.</p><p>Instead:</p><p>Traders enter</p><p>Their stop losses create liquidity</p><p>Smart money takes that liquidity</p><p>Then the real move starts</p><p>2. <b>Why the Market Creates Inducement</b></p><p>The market moves because of liquidity.</p><p>Big traders (institutions) need large orders to enter positions.</p><p>To get those orders, they encourage retail traders to enter first.</p><p>This is inducement.</p><p>Example:</p><p>1️⃣ Market moves up</p><p>2️⃣ Traders think breakout → BUY</p><p>3️⃣ Price suddenly drops</p><p>4️⃣ Stops get taken</p><p>5️⃣ Market moves up strongly</p><p>That trap is inducement.</p><p>3. <b>Where Inducement Usually Appears</b></p><p>Inducement often forms:</p><p>Before liquidity grabs</p><p>Before big breakouts</p><p>Near support and resistance</p><p>Near order blocks</p><p>Common places:</p><p>✔ Equal highs</p><p>✔ Equal lows</p><p>✔ Trendline touches</p><p>✔ Fake breakouts</p><p>4. <b>Example of Inducement in an Uptrend</b></p><p>Scenario:</p><p>1️⃣ Price forms Higher Low</p><p>2️⃣ Traders buy early</p><p>3️⃣ Market drops slightly</p><p>4️⃣ Stops get taken</p><p>5️⃣ Price moves strongly upward</p><p>The small drop was inducement.</p><p>5. <b>Inducement vs Liquidity Grab</b></p><p>Many traders confuse these.</p><p>Inducement</p><p>Creates temptation to enter</p><p>Encourages traders to open positions</p><p>Liquidity Grab</p><p>Takes stop losses</p><p>Usually:</p><p>Inducement → Liquidity Grab → Real Move</p>.`,
  img: "https://i.imgur.com/IeTqbOe.jpeg"

  },
    "market structure":{
 html: `<p>&nbsp;<b>Market Structure in Trading 📈</b></p><p>Market Structure is the foundation of professional trading.</p><p>It shows how price moves over time and helps traders know whether the market is going up, down, or sideways.</p><p>Since you trade crypto, understanding market structure will help you know:</p><p>When to buy</p><p>When to sell</p><p>When not to trade</p><p>1. <b>What is Market Structure?</b></p><p>Market structure is the pattern created by price highs and lows.</p><p>Price moves in waves, forming:</p><p>Higher Highs (HH)</p><p>Higher Lows (HL)</p><p>Lower Highs (LH)</p><p>Lower Lows (LL)</p><p>These tell us the direction of the market.</p><p>2. <b>Bullish Market Structure (Uptrend) 🟢</b></p><p>A bullish market forms:</p><p>Higher High (HH)</p><p>Higher Low (HL)</p><p>Meaning:</p><p>Buyers are stronger</p><p>Price keeps pushing up</p><p><b>3.Bearish Market Structure (Downtrend) 🔴</b></p><p>A bearish market forms:</p><p>Lower High (LH)</p><p>Lower Low (LL)</p><p>Meaning:</p><p>Sellers control the market</p><p>Price keeps moving down</p><p><b>Three Types of Market Structure</b></p><p>1️⃣ <b>Uptrend</b></p><p>Price moves higher and higher</p><p>Pattern: HH → HL → HH</p><p>2️⃣ <b>Downtrend</b></p><p>Price moves lower and lower</p><p>Pattern: LL → LH → LL</p><p>3️⃣ <b>Range (Sideways)</b></p><p>Price moves between support and resistance.</p><p>Example:</p><p>Support = $60,000</p><p>Resistance = $70,000</p><p>Price keeps bouncing.</p>.`,
   img: "https://i.imgur.com/zc1OtJB.png"

  },
  "support and resistance":{
  html: `<p>&nbsp;<b>Support and Resistance in Trading 📊</b></p><p>Support and Resistance are two of the most important concepts in trading. Every trader—forex, stocks, or crypto—uses them to understand where price may stop, reverse, or break.</p><p>Since you trade crypto on Bybit, this concept is very important for finding good entry and exit points.</p><p>1. <b>What is Support? 🟢</b></p><p>Support is a price level where the market tends to stop falling and bounce upward.</p><p>It happens because buyers enter the market at that price.</p><p>Example</p><p>If BTC keeps dropping to $60,000 and bouncing up from there many times, that $60,000 becomes support.</p><p>Why it works</p><p>Buyers think price is cheap there</p><p>Demand becomes stronger than supply</p><p>📌 Think of support like a floor — price falls and hits the floor, then bounces.</p><p>2. <b>What is Resistance? 🔴</b></p><p>Resistance is a price level where the market tends to stop rising and move downward.</p><p>It happens because sellers enter the market.</p><p>Example</p><p>If BTC keeps reaching $70,000 and then falling, that $70,000 becomes resistance.</p><p>📌 Think of resistance like a ceiling — price hits the ceiling and drops.</p><p>3. <b>Why Support and Resistance Form</b></p><p>Support and resistance exist because of human psychology and liquidity.</p><p>Reasons include:</p><p>Traders placing buy orders</p><p>Traders placing sell orders</p><p>Stop losses</p><p>Institutional orders</p><p>Previous market reactions</p><p>Large traders often accumulate or distribute around these levels.</p><p>4. Types of Support and Resistance</p><p>1️⃣ <b>Horizontal Support &amp; Resistance</b></p><p>The most common type.</p><p>Example:</p><p>Support = $60,000</p><p>Resistance = $70,000</p><p>Price moves between them like a range.</p><p>2️⃣ <b>Dynamic Support &amp; Resistance</b></p><p>These move with price.</p><p>Examples include:</p><p>Moving averages</p><p>Trendlines</p>.`,
    img: "https://i.imgur.com/Ebf5Bah.png"

  },
"Patience":{
html: `<p>&nbsp;<b>Patience</b>: is the ultimate edge. In trading, it is often the omission of action that yields the highest return. While discipline is following your rules, patience is the ability to wait for the market to give you a reason to apply those rules in the first place.</p><p>​Without patience, a trader is just a gambler waiting for a fix.</p><p>​The Three Stages of Trading Patience</p><p>​1. <b>Patience to Wait for the Setup</b></p><p>​The market is in "noise" mode 80% of the time. Professional trading involves sitting on your hands until price reaches a high-probability Point of Interest (POI).</p><p>​The "Sniper" Mindset: A sniper doesn't fire at every movement in the grass; they wait for the target to enter the crosshairs. If price is in the middle of a range, there is no trade.&nbsp;&nbsp;</p><p>​The Boredom Test: If you feel "bored" and start looking for trades on lower timeframes (like the 1-minute) just to feel active, you are likely about to donate money to the market.</p><p>​2. <b>Patience to Sit Through the Drawdown</b></p><p>​Once you are in a trade, price rarely moves in a straight line to your Target (TP). It will breathe, pull back, and test your entry.</p><p>​The "Stop-Loss" Contract: When you enter, you sign a contract with yourself. You accepted the risk (X). If you close the trade early out of fear before it hits your stop or your target, you have broken that contract and ruined your Risk-to-Reward ratio.</p><p>​Trust the Data: If your backtesting shows the strategy works over 100 trades, let this one trade play out.</p><p>​3. <b>Patience to Let the Winner Run</b></p><p>​This is the hardest part. Seeing a $50 profit and wanting to "lock it in" before it disappears is a survival instinct, but it’s a mathematical trap.</p><p>​The "R" Multiple: If you risk $10 to make $30 (a 1:3 RR), but close at $15 because you're nervous, you now need a much higher win rate to stay profitable.</p><p>​Mechanical Management: Use "Break Even" stops or partial TPs at logical structural levels so you can let the rest of the position reach the final target stress-free.</p>.`, 
 img: "https://i.imgur.com/e67hZIo.jpeg"

  },
 "Discipline":{
html: `<p>&nbsp;<b>discipline:</b> is the ability to choose your long-term goals over your short-term impulses. It is the bridge between a plan and an achievement.</p><p>To move from "guessing" to "executing," consider these structural pillars:</p><p>​1. <b>The "Mechanical" Rulebook</b></p><p>​Discipline fails when a setup is "almost" there. To fix this, your entry requirements should be a literal checklist. If one item is missing, there is no trade.</p><p>​HTF Alignment: Is the Higher Time Frame trend backing this move?</p><p>​POI Validation: Has price tapped a specific Point of Interest (Order Block, Breaker, or Gap)?</p><p>​Liquidity Sweep: Has "inducement" or a stop-run occurred before the entry?</p><p>​Ltf Confirmation: Do you have a Change of Character (CHoCH) or a Flip on the lower timeframe?</p><p>​2. <b>Risk as a Constant</b></p><p>​The biggest killer of discipline is "revenge trading" or "size doubling."</p><p>​Fixed Percentage: Never risk more than 0.5% to 1% of your equity per trade.</p><p>​The "Daily Stop": If you lose two trades in a row, the platform stays closed for 24 hours. No exceptions. This prevents the "gambler's itch" to make it back immediately.</p><p>​3. <b>The Visual Environment</b></p><p>​Your workspace dictates your mental state. If your charts are cluttered with indicators, your mind will be cluttered with conflicting signals.</p><p>​Clean Charts: Use a neutral background (dark modes are often less straining) and keep only the essential price action visible.</p><p>​The "Log" Requirement: Discipline is maintained by the knowledge that you have to record your mistake. If you take a trade outside your plan, you must write down why you broke the rule in a journal. The embarrassment of a "bad" entry in your log is a powerful deterrent.</p><p>​4. <b>Professional Separation</b></p><p>​Treat your trading like a business entity, not a hobby.</p><p>​Pre-Market Routine: Spend 15 minutes reviewing news and marking levels before you are allowed to click "buy" or "sell."</p><p>​Post-Market Review: Once the session ends, step away. Over-analyzing a closed market leads to "over-trading" in the next session.</p>.`,
  img: "https://i.imgur.com/kdDsmbb.jpeg"

  },
    "Risk Management":{
html: `<div style="font-family: Arial, sans-serif; max-width:900px; margin:auto; line-height:1.7;">

<h1 style="color:#2c3e50;">Risk Management in Trading</h1>

<p><b>Risk Management</b> is the process of protecting your trading capital by controlling how much money you can lose in a trade.</p>

<p>Professional traders focus on protecting their capital first before thinking about profit.</p>

<hr>

<h2 style="color:#2c3e50;">1. Why Risk Management Is Important</h2>

<p>Without risk management, even a good trader can lose their entire account.</p>

<ul>
<li>It protects your capital</li>
<li>It prevents emotional trading</li>
<li>It allows you to survive losing streaks</li>
<li>It keeps your trading consistent</li>
</ul>

<hr>

<h2 style="color:#2c3e50;">2. The 1% – 2% Risk Rule</h2>

<p>Most professional traders risk only <b>1% to 2%</b> of their capital per trade.</p>

<table border="1" cellpadding="10" style="border-collapse:collapse; width:100%;">
<tr style="background:#f2f2f2;">
<th>Capital</th>
<th>1% Risk</th>
<th>2% Risk</th>
</tr>

<tr>
<td>$100</td>
<td>$1</td>
<td>$2</td>
</tr>

<tr>
<td>$500</td>
<td>$5</td>
<td>$10</td>
</tr>

<tr>
<td>$1000</td>
<td>$10</td>
<td>$20</td>
</tr>

</table>

<p>This helps traders avoid blowing their accounts.</p>

<hr>

<h2 style="color:#2c3e50;">3. Risk-to-Reward Ratio</h2>

<p>Risk-to-Reward compares how much you are willing to lose compared to how much you want to gain.</p>

<table border="1" cellpadding="10" style="border-collapse:collapse; width:100%;">

<tr style="background:#f2f2f2;">
<th>Risk</th>
<th>Reward</th>
<th>Ratio</th>
</tr>

<tr>
<td>$1</td>
<td>$2</td>
<td>1:2</td>
</tr>

<tr>
<td>$1</td>
<td>$3</td>
<td>1:3</td>
</tr>

<tr>
<td>$2</td>
<td>$6</td>
<td>1:3</td>
</tr>

</table>

<p>A good trader usually aims for <b>1:2 or 1:3</b> risk-to-reward.</p>

<hr>

<h2 style="color:#2c3e50;">4. Stop Loss</h2>

<p>A <b>Stop Loss</b> is an automatic order that closes a trade to prevent further losses.</p>

<p>Example:</p>

<ul>
<li>Entry Price: $30,000</li>
<li>Stop Loss: $29,700</li>
<li>Risk: $300</li>
</ul>

<p>This prevents large unexpected losses.</p>

<hr>

<h2 style="color:#2c3e50;">5. Position Sizing</h2>

<p>Position sizing determines how much money you should use in a trade.</p>

<p>Example:</p>

<ul>
<li>Account Balance: $100</li>
<li>Risk per trade: 2%</li>
<li>Maximum loss allowed: $2</li>
</ul>

<p>This keeps your losses small and manageable.</p>

<hr>

<h2 style="color:#2c3e50;">6. Maximum Daily Loss</h2>

<p>Professional traders also set a maximum daily loss limit.</p>

<p>Example:</p>

<ul>
<li>Account Balance: $100</li>
<li>Maximum daily loss: $5</li>
</ul>

<p>If you lose $5 in a day, you stop trading for that day.</p>

<hr>

<h2 style="color:#2c3e50;">7. Common Risk Management Mistakes</h2>

<ul>
<li>No stop loss</li>
<li>Over-leveraging</li>
<li>Risking too much capital</li>
<li>Revenge trading</li>
<li>Trading emotionally</li>
</ul>

<hr>

<h2 style="color:#2c3e50;">Golden Rule of Trading</h2>

<p><b>Protect your capital first. Profit will come later.</b></p>

</div>.`,
  img: "https://i.imgur.com/xojPZxb.jpeg"

  },
"Candlestick":{
html: `<div style="font-family: Arial, sans-serif; line-height: 1.7; margin: auto; max-width: 800px;">

<h1 style="color: #2c3e50;">Candlesticks in Trading</h1>

<p><b>Candlesticks</b> are the most common way traders read price movement on a chart. Each candlestick shows what happened to the price during a specific time period.</p>

<h2 style="color: #2c3e50;">Timeframes</h2>
<ul>
<li>1 Minute</li>
<li>5 Minutes</li>
<li>15 Minutes</li>
<li>1 Hour</li>
<li>4 Hours</li>
<li>1 Day</li>
</ul>

<h2 style="color: #2c3e50;">Parts of a Candlestick</h2>

<p>Each candlestick shows four important prices:</p>

<table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%;">
<tbody><tr style="background: rgb(242, 242, 242);">
<th>Part</th>
<th>Meaning</th>
</tr>

<tr>
<td>Open</td>
<td>The price where the candle started</td>
</tr>

<tr>
<td>Close</td>
<td>The price where the candle ended</td>
</tr>

<tr>
<td>High</td>
<td>The highest price reached</td>
</tr>

<tr>
<td>Low</td>
<td>The lowest price reached</td>
</tr>

</tbody></table>

<h2 style="color: #2c3e50;">Bullish vs Bearish Candles</h2>

<h3>🟢 Bullish Candle</h3>
<p>Price closes <b>higher</b> than it opened. This means buyers are stronger.</p>

<h3>Image&nbsp;</h3><h3>🔴 Bearish Candle</h3>
<p>Price closes <b>lower</b> than it opened. This means sellers are stronger.</p><h2 style="color: #2c3e50;">Common Candlestick Patterns</h2>

<ul>
<li><b>Doji</b> – Shows market indecision.</li>
<li><b>Hammer</b> – Possible bullish reversal.</li>
<li><b>Shooting Star</b> – Possible bearish reversal.</li>
<li><b>Bullish Engulfing</b> – Strong buying pressure.</li>
<li><b>Bearish Engulfing</b> – Strong selling pressure.</li>
</ul>

<h2 style="color: #2c3e50;">Why Candlesticks Are Important</h2>

<ul>
<li>Shows buyer vs seller strength</li>
<li>Helps identify trend direction</li>
<li>Helps detect market reversals</li>
<li>Helps traders make better decisions</li>
</ul>

<h2 style="color: #2c3e50;">Simple Definition</h2>

<p><b>A candlestick is a price bar that shows the open, close, high, and low of an asset during a specific period of time.</b></p>

</div>.`,
  img: "https://i.imgur.com/zboYQzm.jpeg"

  },
    "Trading Terminologies":{
html: `<p>&nbsp;Here are some mostly use terminologies used in trading industry&nbsp;</p><p style="text-align: center;">&nbsp;<b>Basic Trading Terms</b></p><p><br /></p><p><b>Trading:</b>Buying and selling assets to make profit.</p><p><b>Market:</b>A place where assets are bought and sold.</p><p><b>Asset:</b>Something you can trade (crypto, forex, stocks).</p><p><b>Pair</b>:Two assets traded together (example: BTC/USDT).</p><p><b>Exchange</b>:A platform where trading happens like Bybit or Binance.</p><p><b>Liquidity:</b>How easily an asset can be bought or sold.</p><p><b>Volatility</b>:How fast price moves up or down.</p><p style="text-align: center;"><b>Order Types</b></p><p><b>Market Order:</b>Buy or sell instantly at current price.</p><p><b>Limit Order</b>:Buy or sell at a specific price.</p><p><b>Stop Order</b>:Order triggered when price reaches a level.</p><p><b>Stop Loss (SL):</b>Automatic order to limit loss.</p><p><b>Take Profit (TP):</b>Automatic order to secure profit.</p><p style="text-align: center;"><b>Market Direction Terms</b></p><p><br /></p><p><b>Bullish:</b>Market expected to go up.</p><p><b>Bearish</b>:Market expected to go down.</p><p><b>Bull Market:</b>Long period of rising prices.</p><p><b>Bear Market:</b>Long period of falling prices.</p><p><b>Sideways Market:</b>Price moving in a range.</p><p style="text-align: center;"><b>Price Movement Terms</b></p><p><b>Trend:</b>General direction of price.</p><p><b>Uptrend</b>:Higher highs and higher lows.</p><p><b>Downtrend</b>:Lower highs and lower lows.</p><p><b>Retracement:</b>Temporary pullback in a trend.</p><p><b>Reversal</b>:Change of trend direction.</p><p><b>Breakout:</b>Price breaking a strong level.</p><p><b>Fakeout</b>:False breakout that reverses.</p><p style="text-align: center;"><b>Technical Analysis Terms</b></p><p><b>Support:</b>Price level where buyers enter.</p><p><b>Resistance</b>:Price level where sellers enter.</p><p><b>Indicator:</b>Tool used to analyze price.</p><p><b>Moving Average (MA):</b>Average price over time.</p><p><b>RSI:</b>Indicator showing overbought or oversold conditions.</p><p><b>MACD</b>:Indicator showing trend strength.</p><p><b>Volume</b>:Amount of trading activity.</p><p style="text-align: center;"><b>Risk Management Terms</b></p><p><b>Risk Management:</b>Controlling how much you can lose.</p><p><b>Risk-to-Reward (RR):</b>Comparing potential profit to loss.</p><p><b>Position Size:</b>Amount of capital used in a trade.</p><p><b>Drawdown:</b>Reduction of trading account.</p><p><b>Capital:</b>Money used for trading.</p><p style="text-align: center;"><b>Advanced Trading Terms</b></p><p><b>Leverage</b>:Borrowed funds to increase position size.</p><p><b>Margin:</b>Money used to open leveraged trade.</p><p><b>Liquidation:</b>Forced closing of position due to loss.</p><p><b>Funding Rate:</b>Fee between long and short traders.</p><p><b>Open Interest</b>:Total open futures contracts.</p><p style="text-align: center;"><b>Smart Money Concepts (SMC)</b></p><p><b>Liquidity</b>:Areas where stop losses exist.</p><p><b>Liquidity Grab</b>:Price taking stops before moving.</p><p><b>Order Block</b>:Institutional buying or selling zone.</p><p><b>Fair Value Gap (FVG)</b>:Price imbalance in market.</p><p><b>Break of Structure (BOS):</b>Market structure change.</p><p><b>Change of Character (CHOCH)</b>:Early sign of reversal.</p><p style="text-align: center;"><b>Candlestick Terms</b></p><p><b>Candle</b>:A price bar showing open, close, high, low.</p><p><b>Wick:</b>Thin line showing price rejection.</p><p><b>Body:</b>Main part of candle showing open/close.</p><p><b>Doji:</b>Candle showing indecision.</p><p><b>Engulfing</b>:One candle fully covering another.</p><p style="text-align: center;"><b>Trader Psychology Terms</b></p><p><b>FOMO</b>:Fear of missing out.</p><p><b>FUD:</b>Fear, uncertainty, doubt.</p><p><b>Overtrading:</b>Trading too frequently.</p><p><b>Revenge Trading</b>:Trading emotionally after loss.</p><p><b>Discipline</b>:Following trading rules strictly.</p>.`,
  img: "https://i.imgur.com/PeRfJ7J.jpeg"

  },
    "fibonacci Retracement":{
html: `<p>&nbsp;<b>Fibonacci Retracement in Trading 📐</b></p><p>Fibonacci Retracement is a tool traders use to find possible reversal or pullback levels in the market.</p><p>When price moves strongly up or down, it usually pulls back a little before continuing the trend.</p><p>Fibonacci helps traders predict where that pullback may stop.</p><p>1. <b>What is Fibonacci Retracement?</b></p><p>It is based on Fibonacci numbers, a mathematical sequence discovered by the mathematician Leonardo Fibonacci.</p><p>In trading, the important Fibonacci levels are:</p><p>0.236</p><p>0.382</p><p>0.5</p><p>0.618</p><p>0.786</p><p>These levels act like temporary support or resistance.</p><p>2. <b>Why Traders Use Fibonacci</b></p><p>Traders use it to:</p><p>✔ Find entry points</p><p>✔ Identify pullbacks</p><p>✔ Set stop loss</p><p>✔ Set take profit</p><p>It works best in trending markets.</p><p>3. <b>How Fibonacci Works (Simple Example)</b></p><p>Imagine BTC rises from $60,000 to $70,000.</p><p>After that strong move, price usually pulls back.</p><p>Possible pullback levels:</p><p>38.2%</p><p>50%</p><p>61.8%</p><p>These levels are where price might bounce and continue the trend.</p><p>4. <b>Most Important Fibonacci Levels</b></p><p>0.382 (38.2%)</p><p>A shallow pullback.</p><p>Meaning the trend is very strong.</p><p>0.5 (50%)</p><p>Very common retracement level.</p><p>Many traders watch this area.</p><p>0.618 (61.8%) ⭐</p><p>This is called the Golden Ratio.</p><p>Most professional traders consider this the strongest Fibonacci level.</p><p>Many big reversals happen here.</p><p>5. <b>How to Draw Fibonacci</b></p><p>On trading platforms like TradingView:</p><p>For an Uptrend</p><p>Draw from:</p><p>Low → High</p><p>For a Downtrend</p><p>Draw from:</p><p>High → Low</p><p>This shows the retracement levels.</p>.`,
  img: "https://i.imgur.com/RFYuJBc.jpeg"

  },
    "block chain technology": {
  html: `<div style="text-align: center;"><b>Blockchain</b></div>Blockchain: is a decentralized, distributed, and immutable digital ledger technology (DLT) that records transactions across a network of computers, ensuring security and transparency without intermediaries. Data is stored in "blocks," which are linked chronologically to form a chain, making it nearly impossible to alter past information.<div><br /></div><div><div style="text-align: center;"><b>Simple Example&nbsp;</b></div><div><br /></div><div><ul style="text-align: left;"><li>Imagine a public notebook:</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li>Everyone can see the notebook.</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li>Anyone can write a new page.</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li>But no one can erase old pages.</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li style="text-align: center;">Each page is like a block, and all the pages together form the blockchainHow&nbsp;</li><li style="text-align: center;"><br /></li><li style="text-align: center;"><u><b>Blockchain Works&nbsp;</b></u></li></ul></div><div><br /></div><div>1.Transaction happens</div><div>Example: You send crypto to someone.</div><div><br /></div><div>2.Transaction is broadcast</div><div>The network of computers receives it.</div><div><br /></div><div>3. Verification</div><div>Computers check if the transaction is valid.</div><div><br /></div><div>4. Block creation</div><div>Verified transactions are grouped into a block.</div><div><br /></div><div>5. Block added to chain</div><div>The new block links to the previous block.</div></div><div><br /></div><div>Image&nbsp;</div>` , 
  img: "https://i.imgur.com/wGzj3s7.jpeg"

  },
    "what is crypto": {
 html: `<div style="text-align: center;"><b><u>Cryptocurrency</u></b></div><b>
Cryptocurrency</b>: is a digital, decentralized currency secured by cryptography, operating on blockchain technology without central bank control. It enables peer-to-peer transactions and acts as an alternative, volatile investment asset. Popular examples include Bitcoin (BTC) and Ethereum (ETH), with major markets including exchanges like Coinbase.&nbsp;<div style="text-align: center;"><u><b>Aspects of Cryptocurrency</b></u>:&nbsp;</div><div><br /></div><div><ul style="text-align: left;"><li><b>Decentralization</b>: Unlike fiat money, crypto is not managed by governments or banks.
Blockchain Technology: Transactions are recorded on a public, distributed ledger.&nbsp;</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li><b>Security</b>: Cryptography ensures safe transactions and controls the creation of new units.&nbsp;</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li><b>Storage: </b>Digital assets are stored in virtual wallets.&nbsp;</li></ul></div><div><br /></div><div><ul style="text-align: left;"><li><b>Risk &amp; Volatility</b>: Markets are highly volatile, meaning investments can rapidly lose value.&nbsp;</li></ul></div><div><br /></div><div style="text-align: left;"><ul style="text-align: left;"><li><b>Uses</b>: While used for online payments</li></ul><br /></div>.`,
   img: "https://i.imgur.com/U0ussWj.jpeg"
    },
  "fomo": {
    html: `<p>&nbsp;FOMO means Fear Of Missing Out.</p><p>In trading, FOMO happens when a trader enters a trade because they are afraid of missing a big move, not because their strategy gave a proper signal.</p><p>Example in Crypto/Forex</p><p>Price of a coin starts pumping fast.</p><p>You didn’t enter earlier.</p><p>You feel pressure like “If I don’t buy now I will miss the profit.”</p><p>You enter late.</p><p>Then the market reverses and you lose money.</p><p>That emotional decision is FOMO.</p><p>Signs You Are Trading With FOMO</p><p>Entering a trade after a big candle.</p><p>Entering without waiting for confirmation.</p><p>Ignoring your trading plan.</p><p>Buying because everyone is talking about it.</p><p>Feeling panic or urgency to enter.</p><p>Why FOMO Is Dangerous</p><p>You enter late.</p><p>Risk becomes very high.</p><p>Stop loss becomes wide.</p><p>Many traders buy the top of the market.</p><p>Professional Traders Do This Instead</p><p>Wait for market structure confirmation.</p><p>Follow risk management.</p><p>Accept that missing a trade is normal.</p><p>Focus on the next setup, not the current pump.</p><p>A Powerful Trading Rule</p><p>“Opportunities in the market are endless. Capital is limited.”</p>.` ,
  img:"https://i.imgur.com/oBSHr9h.jpeg"
    },
};
// 2. THE ENGINE: OPEN LESSON FUNCTION
function openLesson(lessonName) {
  const data = lessons[lessonName];
  if (data) {
    const titleElem = document.querySelector('#lesson h2');
    const textContainer = document.getElementById('lesson-text'); // Must be a <div> in HTML
    const imgElem = document.getElementById('lesson-img');

    if (titleElem) titleElem.innerText = lessonName;
    
    // Use innerHTML to render the bold text and bullet points
    if (textContainer) {
      textContainer.innerHTML = data.html; 
    }
    
    if (imgElem) imgElem.src = data.img;

    showPage('lesson');
  } else {
    console.error("Lesson not found: " + lessonName);
  }
}


// 3. NAVIGATION LOGIC
  

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => {
    p.classList.remove('active');
    p.style.display = 'none';
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    target.style.setProperty('display', 'block', 'important');
  }
}


// 4. CATEGORY BRIDGE
function openCategory(categoryName) {
  showPage(categoryName);
}

// 5. PROFILE UPDATE LOGIC
function updateProfileData() {
  const newName = document.getElementById('display-name-input').value;
  const newUser = document.getElementById('username-input').value;
  
  const nameDisplay = document.querySelector('#profile h3');
  const userDisplay = document.querySelector('.user-handle');

  // Update Name
  if (newName && newName.trim() !== "") {
    if (nameDisplay) {
      nameDisplay.innerText = newName;
      localStorage.setItem('storedName', newName);
    }
  }

  // Update Username (YOUR BLOCK)
  if (newUser && newUser.trim() !== "") {
    const formattedUser = newUser.startsWith('@') ? newUser : '@' + newUser;
    
    if (userDisplay) {
      userDisplay.innerText = formattedUser;
      // Note: formattedUser MUST be inside these braces to work!
      localStorage.setItem('storedUser', formattedUser);
    }
  }
function showToast(message) {
  const toast = document.getElementById('custom-alert');
  const toastMsg = document.getElementById('toast-message');
  
  toastMsg.innerText = message;
  toast.classList.add('show');

  // Automatically hide it after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
    // Trigger the custom toast instead of a boring alert
  showToast("Profile updated successfully!");
  
  // Give the user 1 second to see the success message before switching pages
  setTimeout(() => {
    showPage('profile');
  }, 1000);
}

const tradingTips = [

  "Never risk more than 1–2% of your capital per trade.",

  "Liquidity often comes before the real move.",

  "Patience is a trader's greatest advantage.",

  "Always wait for confirmation before entering.",

  "Trade with the trend, not against it.",

  "Avoid revenge trading after losses.",

  "Protect your capital before chasing profit.",

  "High probability setups are better than many trades.",

  "Market structure reveals the real direction.",

  "Discipline separates profitable traders from gamblers."

];

// 2️⃣ Function to load the tip (outside load)

function loadDailyTip() {

  const day = new Date().getDate();

  const tip = tradingTips[day % tradingTips.length];

  const tipElement = document.getElementById("daily-tip");

  if (tipElement) {

    tipElement.innerText = tip;

  }

}

// 3️⃣ Initialization

window.addEventListener('load', () => {

  const savedName = localStorage.getItem('storedName');

  const savedUser = localStorage.getItem('storedUser');

  if (savedName && document.querySelector('#profile h3')) {

    document.querySelector('#profile h3').innerText = savedName;

  }

  if (savedUser && document.querySelector('.user-handle')) {

    document.querySelector('.user-handle').innerText = savedUser;

  }

  // ✅ Load daily trading tip

  loadDailyTip();

});
