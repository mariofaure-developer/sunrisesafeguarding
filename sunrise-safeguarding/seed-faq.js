import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '2vw3tpvg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token:
    'skBZRDTZFoGdFGFz5ZFKXwQhPuAYGoChLRdIf6axduKRun0VWfHKH3n7mziaGq4VVdfZOyKXxoPSXGxRdDaZWi73J0uGlaxAM9U9125Cs3zUbBod9kS5OIlC0Gc8KA0UMc9an2N8v1KFos6qA91GHALz9u2j7dLZQhym9rnhCttLdBGOMd3P',
  useCdn: true,
})

const block = (text) => [
  {
    _type: 'block',
    children: [
      {
        _type: 'span',
        text,
      },
    ],
  },
]

async function seedFAQ() {
  await client.createOrReplace({
    _id: 'faqPage',
    _type: 'faqPage',

    heroTitle: 'FAQs',
    heroText:
      'Answers to common questions about safeguarding — what it is, why it matters, and what good practice looks like.',

    faqs: [
      {
        _key: '1',
        question: 'What is safeguarding?',
        answer: block(
          'Safeguarding is about creating environments where people are safe, respected, and protected from harm. It is not only about responding when something goes wrong, but about how organisations think, act, and make decisions every day to reduce risk and increase safety, dignity, and care. Safeguarding includes prevention as well as response, culture as well as policy, and leadership as well as frontline practice.',
        ),
      },
      {
        _key: '2',
        question: 'Why is safeguarding important?',
        answer: block(
          'Safeguarding matters because harm rarely starts with a crisis. It usually begins quietly, in small moments where people feel unsure, unsupported, or afraid to speak. Good safeguarding protects children and vulnerable adults, supports staff and volunteers, and protects organisations from crisis and loss of trust. It builds cultures where people feel safe to raise concerns early, before harm becomes serious.',
        ),
      },
      {
        _key: '3',
        question: 'What difference does safeguarding actually make?',
        answer: block(
          'When safeguarding is strong, people speak up sooner, risks are noticed earlier, and decisions are calmer and clearer. Mistakes become opportunities for learning rather than blame, and children and vulnerable adults are safer in real, practical ways. Safeguarding changes how people behave, not just what they know.',
        ),
      },
      {
        _key: '4',
        question: "What's the difference between safeguarding and health and safety?",
        answer: block(
          'Health and safety focuses mainly on physical risks such as buildings, equipment, accidents, and procedures. Safeguarding focuses on people, including abuse, neglect, exploitation, power, boundaries, and emotional and relational safety. Health and safety asks whether a space is physically safe, while safeguarding asks whether the people in that space are safe from harm by others and by systems. Both matter, but they are not the same thing.',
        ),
      },
      {
        _key: '5',
        question: "What's the difference between safeguarding and child protection?",
        answer: block(
          'Child protection is part of safeguarding, but it is not the whole picture. Child protection focuses on responding when serious harm or abuse is suspected and often involves statutory services like social services or the police. Safeguarding includes child protection but also covers prevention, culture, training, systems, leadership, and early action. Safeguarding is the whole landscape, and child protection is one part of it.',
        ),
      },
      {
        _key: '6',
        question: 'Why should organisations invest in good safeguarding?',
        answer: block(
          'Safeguarding is not a cost, it is a form of protection. Good safeguarding reduces crisis and reputational damage, prevents legal and financial risk, supports staff to work with confidence, and builds trust with families, communities, and partners. Organisations that invest in safeguarding do not just avoid harm, they become trusted.',
        ),
      },
      {
        _key: '7',
        question: 'What does safeguarding for children look like?',
        answer: block(
          'Safeguarding for children means having safe recruitment, clear boundaries, and adults who know how to respond to concerns. It includes systems for recording and escalating worries, cultures where children are listened to, and leadership that takes responsibility rather than shortcuts. It means children are not just present, but protected, heard, and valued.',
        ),
      },
      {
        _key: '8',
        question: 'What does safeguarding for vulnerable adults look like?',
        answer: block(
          "Safeguarding for vulnerable adults focuses on protection from abuse, neglect, and exploitation while respecting dignity, choice, and independence. It involves safe care environments, staff who understand power, consent, and boundaries, and clear systems for reporting and responding to concerns. It is about safety without taking away people's voice.",
        ),
      },
      {
        _key: '9',
        question: 'What is legal compliance in safeguarding?',
        answer: block(
          'Legal compliance means meeting the minimum requirements of the law, such as having required policies, reporting when legally necessary, and following employment and care regulations. But compliance alone does not equal safety. An organisation can be legally compliant and still unsafe in practice. Good safeguarding goes beyond law into culture, leadership, training, and everyday behaviour. The law sets the floor, not the standard.',
        ),
      },
      {
        _key: '10',
        question: 'Is safeguarding only for big organisations?',
        answer: block(
          'Safeguarding matters wherever people are in positions of trust. This includes schools, NGOs, sports clubs, churches, care homes, community groups, and small organisations. Size does not remove responsibility.',
        ),
      },
      {
        _key: '11',
        question: 'Is safeguarding about blame?',
        answer: block(
          'Safeguarding is about responsibility, not blame. Strong safeguarding cultures focus on learning rather than shaming, encourage early reporting, and support people to do better rather than hide mistakes. Fear makes people unsafe, while learning protects.',
        ),
      },
      {
        _key: '12',
        question: 'Is safeguarding just about policies?',
        answer: block(
          'Policies are important, but they do not keep people safe on their own. People keep people safe. Safeguarding lives in how leaders respond to concerns, how staff are supported, how children and vulnerable adults are treated, and how pressure and crisis are handled. Safeguarding is not what is written. It is what actually happens.',
        ),
      },
    ],

    ctaTitle: 'Still have questions?',
    ctaText:
      'We are happy to talk through your safeguarding needs and help you find the right approach for your organisation.',
    ctaButton: 'Get in touch',
  })

  console.log('FAQ page fully seeded successfully.')
}

seedFAQ().catch(console.error)
