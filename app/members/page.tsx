const data = {
    contents: [
        {
            id: "1",
            image: {
                url: "img-member1.jpg",
                width: 240,
                height: 240,
            },
            name: "デイビッド・チャン",
            positioon: "CEO",
            profile:
                "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。",
        },
        {
            id: "2",
            image: {
                url: "img-member2.jpg",
                width: 240,
                height: 240,
            },
            name: "エミリー・サンダース",
            positioon: "COO",
            profile:
                "グローバル企業での運用管理と組織改革の経験豊富なエグゼクティブ。以前は製造業界でCOOとして勤務し、生産効率の向上や品質管理の最適化に成功。戦略的なマインドセットと組織の能力強化に対する専門知識は、会社の成長と効率化に大きく貢献している。",
        },
        {
            id: "3",
            image: {
                url: "img-member3.jpg",
                width: 240,
                height: 240,
            },
            name: "ジョン・ウィルソン",
            positioon: "CTO",
            profile:
        }

        }
    ]
}

export default function Page(){
    return (
        <div style={{ margin: 20 }}>
            <h1>メンバー</h1>
        </div>
    );
}