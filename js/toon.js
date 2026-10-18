// 웹툰 에피소드 데이터 (21세기 리더십)
// who: 'doc'(리더 선배) | 'kid'(새싹이), face: smile | wow | sad | think | cool
window.CAST = {doc:['리더 선배','학생회장 출신 4학년'], kid:['새싹이','팀플 조장이 된 신입생']};

window.FIG = {
 power:`<svg viewBox="0 0 600 300" font-size="17" text-anchor="middle">
 <rect x="20" y="10" width="200" height="120" rx="16" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/><text x="120" y="40" font-weight="800" fill="#1565c0">개인권력</text>
 ${['전문적','정보적','준거적'].map((t,i)=>`<text x="120" y="${70+i*24}" fill="#0d47a1">${t} Power</text>`).join('')}
 <rect x="20" y="150" width="200" height="140" rx="16" fill="#fce4ec" stroke="#ad1457" stroke-width="2"/><text x="120" y="180" font-weight="800" fill="#ad1457">지위권력</text>
 ${['합법적','보상적','연결적','강제적'].map((t,i)=>`<text x="120" y="${210+i*24}" fill="#880e4f">${t} Power</text>`).join('')}
 <defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2e7d32"/><stop offset="1" stop-color="#c62828"/></linearGradient></defs>
 <path d="M300 20 L340 20 L340 250 L360 250 L320 290 L280 250 L300 250 Z" fill="url(#tg)" opacity=".85"/>
 <text x="470" y="40" font-weight="800" fill="#2e7d32">높은 신뢰 확보</text><text x="470" y="64" fill="var(--sub)">전문적이 최고</text>
 <text x="470" y="250" font-weight="800" fill="#c62828">낮은 신뢰 확보</text><text x="470" y="274" fill="var(--sub)">강제적이 최저</text></svg>`,
 memory:`<svg viewBox="0 0 600 240" font-size="16" text-anchor="middle">${[['듣기',10,'#e53935'],['보기',20,'#fb8c00'],['해보기',70,'#43a047'],['가르치기',100,'#1565c0']].map((d,i)=>{const x=80+i*145,h=d[1]*1.6;return `<rect x="${x-35}" y="${190-h}" width="70" height="${h}" rx="8" fill="${d[2]}"/><text x="${x}" y="${182-h}" font-weight="800" fill="${d[2]}">${d[1]}%</text><text x="${x}" y="215" font-weight="700" fill="currentColor">${d[0]}</text>`;}).join('')}
 <line x1="30" y1="190" x2="570" y2="190" stroke="currentColor"/><text x="300" y="236" fill="var(--sub)">3개월 후 기억 유지율</text></svg>`,
 seventy:`<svg viewBox="0 0 600 120" font-size="17" text-anchor="middle"><rect x="20" y="20" width="392" height="60" fill="#43a047"/><rect x="412" y="20" width="112" height="60" fill="#1e88e5"/><rect x="524" y="20" width="56" height="60" fill="#8e24aa"/>
 <text x="216" y="57" font-weight="800" fill="#fff">70% 경험</text><text x="468" y="57" font-weight="800" fill="#fff">20 피드백</text><text x="552" y="57" font-weight="800" fill="#fff">10</text>
 <text x="300" y="108" fill="var(--sub)">10% = 새로운 스킬 개발 (훈련·온라인 학습)</text></svg>`,
 eq4:`<svg viewBox="0 0 600 260" font-size="16" text-anchor="middle">${[['4. 정서의 반영적 조절','받아들이기 · 거리두기 · 조절','#6a1b9a'],['3. 정서의 지식 활용','미묘한 관계 · 복합 감정 · 전환','#1565c0'],['2. 정서에 의한 사고 촉진','우선순위 · 다양한 관점 · 문제해결','#00897b'],['1. 정서의 인식과 표현','나·남의 정서 파악 · 정확한 표현','#ef6c00']].map((d,i)=>{const w=300+i*90,x=300-w/2;return `<rect x="${x}" y="${10+i*62}" width="${w}" height="54" rx="10" fill="${d[2]}"/><text x="300" y="${34+i*62}" font-weight="800" fill="#fff">${d[0]}</text><text x="300" y="${55+i*62}" fill="#fff" font-size="14">${d[1]}</text>`;}).join('')}</svg>`,
 riasec:`<svg viewBox="0 0 600 300" font-size="16" text-anchor="middle">${[['R','현실형','활동·손재주','#7cb342'],['I','탐구형','논리·분석','#00897b'],['A','예술형','창의·자유','#5e35b1'],['S','사회형','친절·배려','#e53935'],['E','진취형','리더십·설득','#fb8c00'],['C','관습형','꼼꼼·계획','#546e7a']].map((d,i)=>{const a=(-90+i*60)*Math.PI/180,x=300+115*Math.cos(a),y=150+115*Math.sin(a);return `<circle cx="${x}" cy="${y}" r="38" fill="${d[3]}"/><text x="${x}" y="${y-6}" font-weight="800" font-size="20" fill="#fff">${d[0]}</text><text x="${x}" y="${y+16}" font-size="14" fill="#fff">${d[1]}</text><text x="${x+(Math.cos(a)>.3?92:Math.cos(a)<-.3?-92:0)}" y="${y+(Math.abs(Math.cos(a))<.3?(Math.sin(a)<0?-48:58):5)}" font-size="14" fill="var(--sub)">${d[2]}</text>`;}).join('')}<text x="300" y="156" font-weight="800" fill="currentColor">홀랜드</text></svg>`,
 hawkins:`<svg viewBox="0 0 600 300" font-size="15">${[['700~1000','깨달음'],['600','평화'],['500','사랑'],['400','이성'],['250','중립'],['200','용기'],['150','분노'],['100','두려움'],['50','무기력'],['20','수치심']].map((d,i)=>{const y=14+i*28,on=d[1]==='용기';const c=i<5?'#f9a825':i===5?'#e65100':'#ef9a9a';return `<rect x="150" y="${y}" width="300" height="24" rx="6" fill="${c}" ${on?'stroke="#bf360c" stroke-width="3"':''}/><text x="200" y="${y+17}" text-anchor="middle" font-weight="800" fill="#3e2723">${d[0]}</text><text x="370" y="${y+17}" text-anchor="middle" font-weight="700" fill="#3e2723">${d[1]}</text>`;}).join('')}
 <text x="95" y="80" text-anchor="middle" font-weight="800" fill="#f57f17">POWER ↑</text><text x="95" y="240" text-anchor="middle" font-weight="800" fill="#c62828">FORCE ↓</text><text x="520" y="173" text-anchor="middle" font-weight="800" fill="#e65100">← 기준선</text></svg>`,
 anger:`<svg viewBox="0 0 600 120" font-size="16" text-anchor="middle">${[['부정','Denial'],['분노','Anger'],['타협','Bargaining'],['우울','Depression'],['수용','Acceptance']].map((d,i)=>{const x=64+i*118;return `<circle cx="${x}" cy="50" r="40" fill="${['#90a4ae','#e53935','#fb8c00','#5c6bc0','#43a047'][i]}"/><text x="${x}" y="48" font-weight="800" fill="#fff">${d[0]}</text><text x="${x}" y="68" font-size="12" fill="#fff">${d[1]}</text>${i<4?`<text x="${x+59}" y="56" fill="var(--sub)" font-size="20">→</text>`:''}`;}).join('')}<text x="300" y="112" fill="var(--sub)">분노의 5단계</text></svg>`
};

window.TOON = [
{ep:1, w:1, title:'조장이 되었다', sub:'리더십의 정의 · 영향력 7종류 · 리더의 역할', color:'#1565c0', emoji:'👑',
 quiz:['리더십','영향력 + 자발성','긍정적 영향력','준거적 Power','강제적 Power','전문적 Power','창출되는 것','개인권력'],
 memo:['리더십 = 영향력(Power) + 자발성 (정동일 교수)','공통 분모: 집단 상황 + 영향력 행사 과정','개인권력 = 전문·정보·준거 / 지위권력 = 합법·보상·연결·강제','신뢰: 전문적 최고 → 강제적 최저 / Power는 창출되는 것'],
 panels:[
 {t:'talk',bg:'#e3f2fd',L:['kid','sad'],R:['doc','smile'],prop:'👑😰',cap:'팀플 첫 회의 날',lines:[['kid','선배, 제비뽑기로 조장이 됐어요. 저 리더십 없는데…'],['doc','리더십이 뭔지부터 알면 덜 무서워. <b>리더십 = 영향력 + 자발성</b>이야.']]},
 {t:'talk',bg:'#fff8e1',L:['doc','cool'],R:['kid','think'],prop:'🎯',lines:[['doc','정의는 "주어진 상황에서 <b>목표 달성</b>을 위해 개인이나 집단의 활동에 <b>영향력을 미치는 과정</b>".'],['kid','공통점은요?'],['doc','<b>집단 상황</b>, 그리고 <b>영향력을 행사하는 과정</b>. 이 두 개가 공통 분모야.']]},
 {t:'talk',bg:'#e8f5e9',L:['kid','wow'],R:['doc','smile'],prop:'🤝',lines:[['kid','그럼 무섭게 시키면 되는 거예요?'],['doc','아니! 핵심은 <b>긍정적 영향력</b>으로 <b>자발적 추종</b>을 끌어내는 거야. 그리고 정확한 방향설정·실행으로 목표달성!']]},
 {t:'board',title:'Power, 옛날 생각 vs 요즘 생각',html:`<table><tr><th>전통적</th><th>현대적</th></tr><tr><td>강-약, 지배-피지배</td><td class="hl">본질적·보편적 기능</td></tr><tr><td>필요악, 도덕적</td><td class="hl">관계적, 타인의 인식</td></tr><tr><td>한정량</td><td class="hl">역동적, <b>창출되는 것</b></td></tr></table>`},
 {t:'fig',title:'영향력 7가지와 신뢰 수준',svg:'power',cap:'전문적(전문능력) · 정보적(정보) · 준거적(Role Model·호감) / 합법적(지위) · 보상적(칭찬, 긍정) · 연결적(인맥) · 강제적(해고·감봉, 부정)'},
 {t:'talk',bg:'#fce4ec',L:['doc','think'],R:['kid','smile'],prop:'📚',lines:[['doc','너는 조장이라 <b>지위권력</b>은 조금 있어. 근데 진짜 신뢰는 <b>개인권력</b>에서 와. 자료 제일 잘 찾는 사람이 되면 <b>전문적·정보적 Power</b>!'],['kid','강제적 Power는 쓰지 말아야겠네요.'],['doc','맞아. 신뢰가 <b>가장 낮은</b> 영향력이야.']]},
 {t:'board',title:'리더의 역할 6가지',html:`<table><tr><td class="hl">Listen</td><td class="hl">Empowerment</td><td class="hl">Assist</td></tr><tr><td class="hl">Decision</td><td class="hl">Evaluation</td><td class="hl">Reward</td></tr></table><p class="tip">💡 영향력의 소재: 보수·평가·정보·최종 결정·예산·인맥을 누가 쥐고 있나?</p>`}
 ]},
{ep:2, w:2, title:'리더는 배워서 된다', sub:'문제 제기 · 세상의 변화 · 학습 = 변화 · 70-20-10', color:'#00897b', emoji:'🌏',
 quiz:['과정적 측면','결과적 측면','인구통계학적 혁명','협업 마케팅','변화','가르치기','맥락','70-20-10','공자'],
 memo:['유효성: 만족도 = 과정적 / 생산성 = 결과적','인구통계학적 혁명 5 / 디지털 4영역: 협업·이동성·지능/학습·신뢰/리더십','학습 = 변화 / 3개월 후: 듣기 10 · 보기 20 · 해보기 70 · 가르치기 100','70-20-10 = 경험 · 피드백 · 새 스킬'],
 panels:[
 {t:'talk',bg:'#e0f2f1',L:['kid','think'],R:['doc','smile'],prop:'🧬❓',cap:'도서관 앞 벤치',lines:[['kid','근데 리더는 타고나는 거 아니에요?'],['doc','강의에서도 그걸 물어. <b>Genetic or Learned?</b> 과학이냐 예술이냐, 리더와 관리자는 다르냐, 성과에 기여하냐.']]},
 {t:'board',title:'리더십 유효성 판단 기준',html:`<table><tr><th>기준</th><th>측면</th></tr><tr><td>종업원(추종자) 만족도 향상</td><td class="hl">과정적</td></tr><tr><td>생산성 향상</td><td class="hl">결과적</td></tr></table><p class="tip">💡 기준: 집단 성과 · 추종자 만족도 · 조직 대규모 변화 성공 / 키워드: 집단 현상 · 목표 지향적 · 계층의 존재</p>`},
 {t:'talk',bg:'#fff3e0',L:['doc','cool'],R:['kid','wow'],prop:'🏭💡💻',lines:[['doc','세상은 산업혁명 3번(<b>증기 → 전기와 양산 → 전자와 정보통신</b>)을 거쳐 전례 없이 변하는 중이야.'],['doc','<b>인구통계학적 혁명</b>도 있어. 고령화, 밀레니얼 부상, 도시 집중, 이주/이민, 신흥국 성장!'],['kid','디지털 쪽은요?'],['doc','<b>협업, 이동성, 지능/학습, 신뢰/리더십</b> 4영역.']]},
 {t:'talk',bg:'#e8eaf6',L:['kid','smile'],R:['doc','think'],prop:'🙏',lines:[['kid','마더 테레사도 강의에 나왔죠?'],['doc','응. "그녀의 리더십은 배운 것이 아니라 <b>인도의 삶이 스승</b>이었다." 리더는 <b>성과로 말한다</b>, 확실한 건 <b>고성과와 리더십</b>!'],['doc','21세기 리더십은 현실(자기 인식)에서 비전까지 <b>의사결정 GAP</b>과 <b>학습 실행 GAP</b>을 메우는 거야.']]},
 {t:'fig',title:'얼마나 기억에 남을까',svg:'memory',cap:'공자: 들은 것은 잊어버리고, 본 것은 기억하고, 직접 해본 것은 이해한다. 학습 = 변화!'},
 {t:'fig',title:'70-20-10 학습과 성장',svg:'seventy',cap:'70 경험(새 경험·특별 프로젝트) · 20 피드백(360도, 주/월 단위) · 10 새로운 스킬 개발'},
 {t:'talk',bg:'#f1f8e9',L:['doc','smile'],R:['kid','wow'],prop:'🧩',lines:[['doc','마지막! <b>학습은 맥락</b>이야. 처음엔 콘텐츠 90%인데, 전문가가 되면 <b>맥락이 90%</b>.'],['kid','그럼 이 앱으로 문제 풀고 친구한테 설명하면 100% 남겠네요!']]}
 ]},
{ep:3, w:3, title:'감정도 지능이다', sub:'정서지능 정의 · 4영역 · EQ 높은 사람 5특징', color:'#8e24aa', emoji:'💗',
 quiz:['정서지능','Mayer & Salovey','정서의 인식과 표현','정서의 반영적 조절','공감','자아인식','행동경향성','감정에 이름 붙이기'],
 memo:['정서지능 = 감정 점검·변별·이용 능력 (Mayer & Salovey 1990)','4영역(1997): 인식과 표현 → 사고 촉진 → 지식 활용 → 반영적 조절','EQ 높은 사람: 공감 · 경청 · 자아인식 · 융통성 · 충돌 해결','공감 5단계: 감정인식 → 친밀감 → 공감 → 이름 붙이기 → 스스로 해결'],
 panels:[
 {t:'talk',bg:'#f3e5f5',L:['kid','sad'],R:['doc','smile'],prop:'😤💬',cap:'팀플 단톡방이 터진 날',lines:[['kid','팀원끼리 싸웠어요. 저도 화가 나서 답장을 못 하겠어요.'],['doc','지금 필요한 게 <b>정서지능(EQ)</b>이야. 감정도 지능처럼 키울 수 있어.']]},
 {t:'talk',bg:'#fff8e1',L:['doc','cool'],R:['kid','think'],prop:'📖',lines:[['doc','정의 외우자. 자신과 타인의 감정을 <b>점검</b>하고, 차이를 <b>변별</b>하고, 생각·행동에 정서 정보를 <b>이용</b>하는 능력.'],['doc','<b>Mayer & Salovey, 1990</b>. 4영역 모형은 <b>1997</b>! 연도 헷갈리지 마.']]},
 {t:'fig',title:'정서지능 4영역 (아래부터)',svg:'eq4',cap:'EBS 피라미드로는 정서 인식 → 정서 지식 → 정서 활용 → 정서 조절'},
 {t:'board',title:'EQ 높은 사람 5가지',html:`<table><tr><th>특징</th><th>한 줄</th></tr><tr><td class="hl">공감</td><td>남의 입장에서 생각, 감정 공유</td></tr><tr><td class="hl">적극적 경청</td><td>진심으로 듣고 사려 깊게 질문</td></tr><tr><td class="hl">자아인식</td><td>내 감정을 인식하고 조절</td></tr><tr><td class="hl">융통성</td><td>상황은 못 바꿔도 반응은 내 몫</td></tr><tr><td class="hl">충돌 해결</td><td>이기기보다 평화적 해결</td></tr></table>`},
 {t:'talk',bg:'#e8f5e9',L:['kid','think'],R:['doc','smile'],prop:'🏃‍♂️💨',lines:[['kid','근데 화가 나면 생각이 안 돼요.'],['doc','정상이야. 감정은 <b>생존을 위한 장치</b>라 이성보다 먼저 켜져. 감정마다 <b>행동경향성</b>이 있어, 두려우면 도망가듯이.'],['doc','그래서 감정 정보를 <b>처리·활용</b>하고, 감정을 <b>잘 다루는</b> 능력을 키워야 해.']]},
 {t:'board',title:'정서공감능력 키우기 5단계',html:`<ol><li><b>감정인식</b></li><li>친밀감 조성 및 교육의 기회로 삼기</li><li><b>공감</b></li><li><b>감정에 이름 붙이기</b></li><li>행동의 한계 확인 및 스스로 문제해결</li></ol><p class="tip">💡 긍정정서 → 긍정적 자동적 사고 → 의미추구·발견 → <b>삶에 대한 만족</b></p>`}
 ]},
{ep:4, w:4, title:'나는 어떤 사람일까', sub:'자기 탐색 · 홀랜드 RIASEC · 자기인식 5방법', color:'#ef6c00', emoji:'🪞',
 quiz:['홀랜드','현실형','탐구형','예술형','사회형','진취형','관습형','Self-awareness','마음 챙김','f(인간, 상황)'],
 memo:['자기 탐색: 인생곡선 · 핵심가치 · 재능(다중지능) · 흥미검사','RIASEC: 현실·탐구·예술·사회·진취·관습','리더 최고의 덕목 = Self-awareness (스탠포드 75명)','자기인식 5: 마음 챙김 · 요가 · 성찰 · 글쓰기 · 피드백 / 커뮤니케이션 = f(인간, 상황)'],
 panels:[
 {t:'talk',bg:'#fff3e0',L:['kid','think'],R:['doc','smile'],prop:'📈',cap:'4차시 수업 끝나고',lines:[['kid','인생곡선 그리다가 좀 울컥했어요.'],['doc','그게 <b>자기 탐색</b>이야. 인생곡선, 핵심가치, 재능 찾기(다중지능검사), 흥미 검사까지 다 나를 알려는 도구야.']]},
 {t:'fig',title:'홀랜드 흥미 6유형',svg:'riasec',cap:'붙어 있는 유형끼리 비슷하다. 예: 나의 홀랜드 직업유형은 RIC'},
 {t:'board',title:'유형별 약점도 시험에 나와요',html:`<table><tr><th>유형</th><th>약한 것 · 싫어하는 것</th></tr><tr><td class="hl">현실형</td><td>감정 표현 어색, 보수적</td></tr><tr><td class="hl">탐구형</td><td>반복 작업 싫어함</td></tr><tr><td class="hl">예술형</td><td>사무적 재능 약함</td></tr><tr><td class="hl">사회형</td><td>기계적 능력 약함</td></tr><tr><td class="hl">진취형</td><td>오래 걸리는 지적 작업</td></tr><tr><td class="hl">관습형</td><td>비구조화·창조적인 일</td></tr></table>`},
 {t:'talk',bg:'#e3f2fd',L:['doc','cool'],R:['kid','wow'],prop:'🎓',lines:[['doc','스탠포드 경영대 자문위원 <b>75명</b>한테 리더의 최고 덕목을 물었더니 거의 다 <b>Self-awareness</b>래.'],['kid','완전히 객관적으로 나를 알 수 있어요?'],['doc','그건 <b>불가능</b>. 대신 노력하면 능동적이 되고 <b>더 나은 의사결정</b>을 해.']]},
 {t:'board',title:'자기인식 5가지 방법',html:`<table><tr><td class="hl">마음 챙김</td><td>지금 이 순간에 주의, 명상</td></tr><tr><td class="hl">요가</td><td>몸 + 마음 연습, 자기 수용</td></tr><tr><td class="hl">성찰 시간</td><td>생각·감정·행동 검토, 일기</td></tr><tr><td class="hl">글쓰기</td><td>원하는 것·원하지 않는 것 발견</td></tr><tr><td class="hl">피드백 구하기</td><td>여러 사람에게, 한 명 말만 믿지 않기</td></tr></table>`},
 {t:'talk',bg:'#e0f7fa',L:['kid','smile'],R:['doc','smile'],prop:'🧊',lines:[['kid','빙산 그림은 뭐였죠?'],['doc','물 위엔 <b>행동·언어</b>, 물 아래엔 <b>가치·내적 자아·성격·동기</b>. 그래서 <b>커뮤니케이션 = f(인간, 상황)</b>!'],['doc','인간 이해 3가지도: <b>긍정성</b>(People are OK), <b>합리성</b>, <b>변화 가능성</b>.']]}
 ]},
{ep:5, w:5, title:'화를 다스리는 법', sub:'Feeling Grid · 의식 수준 · 감정 다루기 · 분노 5단계', color:'#c62828', emoji:'🔥',
 quiz:['Feeling Grid','용기','수치심','자각','부정','수용','감정연결 고리 분석하기','참자','나-메시지'],
 memo:['Feeling Grid = Energy × Mood','의식 17단계(호킨스): 200 용기 기준, 위 POWER / 아래 FORCE','감정 다루기: 자각 → 선택 → 강화','분노 5단계: 부정→분노→타협→우울→수용 / 습관: 인식→변화 알기→연결 고리 분석'],
 panels:[
 {t:'talk',bg:'#ffebee',L:['kid','sad'],R:['doc','think'],prop:'🌡️',cap:'발표 하루 전',lines:[['kid','팀원이 또 자료를 안 올렸어요. 화가 머리끝까지…'],['doc','지금 감정을 <b>Feeling Grid</b>에 찍어 봐. 세로는 <b>Energy</b>, 가로는 <b>Mood</b>.']]},
 {t:'board',title:'Feeling Grid',html:`<table><tr><th></th><th>불쾌 (Unpleasant)</th><th>유쾌 (Pleasant)</th></tr><tr><td class="hl">에너지 높음</td><td>두려움·화남·짜증</td><td>행복·기쁨·놀람</td></tr><tr><td class="hl">에너지 낮음</td><td>슬픔·지루함·지침</td><td>만족·차분함</td></tr></table>`},
 {t:'fig',title:'의식의 밝기 (호킨스 『의식혁명』)',svg:'hawkins',cap:'17단계 중 일부. 200 용기가 기준선, 최저 20 수치심, 최고 700~1000 깨달음'},
 {t:'talk',bg:'#fff8e1',L:['doc','cool'],R:['kid','wow'],prop:'🔺',lines:[['doc','감정 밑에는 <b>기대</b>, 그 밑엔 <b>열망</b>(사랑·인정·의미), 맨 밑엔 <b>자기(Self)</b>가 있어.'],['kid','그럼 이 화는 "팀플 잘하고 싶다"는 기대였네요.'],['doc','바로 그거! 이제 <b>자각 → 선택 → 강화</b>. "내가 습관적으로 화를 고르고 있구나."']]},
 {t:'fig',title:'분노의 5단계',svg:'anger',cap:'화의 10단계는 약한 짜증 → … → 화(7) → 노여움 → 분노 → 격분(10)'},
 {t:'board',title:'감정관리 습관 & 대인배 7단계',html:`<p><b>습관 3단계</b>: 감정인식하기 → 감정변화 알기 → <b>감정연결 고리 분석하기</b></p><table><tr><td class="hl">1 참자!</td><td>최초 단계가 성패를 좌우</td></tr><tr><td class="hl">2 원래 그런거</td><td>3 웃긴다 · 4 좋다 까짓 것</td></tr><tr><td class="hl">5 그럴만한 사정</td><td>상대방 입장 되어 보기</td></tr><tr><td class="hl">6 내가 왜 너때문에</td><td>7 시간이 약</td></tr></table><p class="tip">💡 감정 그릇: 기본 갈망(조건 없이 받아들이기, 1일 8회 포옹) → 욕구 → 아픔 → 분노, 밖으로는 <b>나-메시지</b></p>`},
 {t:'talk',bg:'#e8f5e9',L:['kid','smile'],R:['doc','smile'],prop:'📱',lines:[['kid','"나는 자료가 늦어서 불안해"라고 나-메시지로 보낼게요!'],['doc','멋지다, 조장님. 마지막으로 존재감 확인 문장도 써 봐. "나는 ( ), ( ), ( )한 사람이다."']]}
 ]}
];
