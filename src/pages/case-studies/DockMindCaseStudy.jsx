import CaseStudyHeader from '../../components/case-study/CaseStudyHeader'
import CaseStudySection from '../../components/case-study/CaseStudySection'
import CaseStudyFooter from '../../components/case-study/CaseStudyFooter'

function DockMindCaseStudy() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">

      <CaseStudyHeader
        category="AI-POWERED DOCUMENT INTELLIGENCE"
        title="DockMind AI"
        description="A document question-answering system that uses retrieval-augmented generation, embeddings and vector search to provide contextual answers from uploaded PDFs."
        liveUrl="https://dock-mind-ai.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/DockMind-AI"
      />

      <CaseStudySection number="01" title="Project Overview">
        <p>
          DockMind AI is a full-stack document intelligence application that
          allows users to upload PDF documents and ask questions about their
          contents.
        </p>

        <p className="mt-5">
          The application processes document content, creates embeddings and
          retrieves relevant sections before generating an answer with a
          language model.
        </p>
      </CaseStudySection>

      <CaseStudySection number="02" title="The Problem">
        <p>
          Finding specific information inside long documents can require users
          to manually search through large amounts of text.
        </p>

        <p className="mt-5">
          DockMind AI explores how retrieval-augmented generation can connect
          a user's question with relevant document content before generating
          the response.
        </p>
      </CaseStudySection>

      <CaseStudySection number="03" title="System Architecture">
        <p>
          The system combines document processing, embeddings, vector search
          and language-model generation with a full-stack web application.
        </p>

        <div className="mt-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8">

          <div className="space-y-4">

            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="font-mono text-xs text-[var(--accent-soft)]">
                01
              </p>

              <h3 className="mt-3 text-sm font-semibold">
                Document Input
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                PDF upload
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-5 w-px bg-[var(--border)]" />
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="font-mono text-xs text-[var(--accent-soft)]">
                02
              </p>

              <h3 className="mt-3 text-sm font-semibold">
                Document Processing
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                PDF extraction → chunking
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-5 w-px bg-[var(--border)]" />
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="font-mono text-xs text-[var(--accent-soft)]">
                03
              </p>

              <h3 className="mt-3 text-sm font-semibold">
                Embeddings & Vector Storage
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Embeddings → MongoDB Atlas Vector Search
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-5 w-px bg-[var(--border)]" />
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="font-mono text-xs text-[var(--accent-soft)]">
                04
              </p>

              <h3 className="mt-3 text-sm font-semibold">
                Retrieval
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Query → vector search → relevant chunks
              </p>
            </div>

            <div className="flex justify-center">
              <div className="h-5 w-px bg-[var(--border)]" />
            </div>

            <div className="rounded-lg border border-[var(--border)] bg-[var(--background)] p-5">
              <p className="font-mono text-xs text-[var(--accent-soft)]">
                05
              </p>

              <h3 className="mt-3 text-sm font-semibold">
                Generation
              </h3>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Retrieved context → Gemini API → answer
              </p>
            </div>

          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="04" title="How It Works">
        <p>
          When a PDF is uploaded, its content is extracted and divided into
          smaller chunks.
        </p>

        <p className="mt-5">
          The chunks are converted into embeddings and stored using MongoDB
          Atlas Vector Search.
        </p>

        <p className="mt-5">
          When a user asks a question, the query is embedded and used to
          retrieve relevant document chunks. The retrieved content is then
          provided to the Gemini API as context for generating the response.
        </p>
      </CaseStudySection>

      <CaseStudySection number="05" title="Technical Implementation">
        <div className="space-y-8">

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              PDF Processing
            </h3>

            <p className="mt-2">
              PDF content is extracted using pdfjs-dist and prepared through
              document chunking.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              RAG Pipeline
            </h3>

            <p className="mt-2">
              LangChain is used as part of the retrieval workflow connecting
              document processing, retrieval and generation.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Embeddings & Vector Search
            </h3>

            <p className="mt-2">
              Document chunks are represented using 3072-dimensional embeddings
              and stored in MongoDB Atlas Vector Search.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Authentication
            </h3>

            <p className="mt-2">
              JWT-based authentication and bcrypt password hashing are used to
              manage authenticated users.
            </p>
          </div>

        </div>
      </CaseStudySection>

      <CaseStudySection number="06" title="Engineering Decisions">
        <div className="space-y-7">

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Retrieval before generation
            </h3>

            <p className="mt-2">
              Relevant document content is retrieved before the language model
              generates an answer, keeping the response connected to the
              uploaded document.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Vector search
            </h3>

            <p className="mt-2">
              MongoDB Atlas Vector Search provides semantic retrieval for the
              embedded document chunks.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Document chunking
            </h3>

            <p className="mt-2">
              Documents are divided into smaller sections before embedding so
              retrieval can work with focused pieces of content.
            </p>
          </div>

        </div>
      </CaseStudySection>

      <CaseStudySection number="07" title="Deployment">
        <p>
          The frontend and backend are deployed separately so the React
          application and API service can be delivered independently.
        </p>

        <div className="mt-7 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[var(--text-secondary)]">
            <span>React / Vite</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Vercel</span>

            <span className="mx-2 text-[var(--border)]">|</span>

            <span>Node / Express</span>
            <span className="text-[var(--accent-soft)]">→</span>
            <span>Render</span>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection number="08" title="What I Learned">
        <p>
          DockMind AI helped me understand the difference between simply
          calling an LLM API and building an application around retrieval,
          embeddings and document-specific context.
        </p>

        <p className="mt-5">
          The project gave me practical experience with document processing,
          chunking, embeddings, vector search and contextual generation.
        </p>

        <p className="mt-5">
          It also reinforced that AI capabilities need to be designed as part
          of a larger software system rather than treated as an isolated model
          call.
        </p>
      </CaseStudySection>

      <CaseStudyFooter
        previousProject={{
          title: 'Veyra',
          path: '/case-studies/veyra',
        }}
        nextProject={{
          title: 'DEVRP V2',
          path: '/case-studies/devrp-v2',
        }}
        liveUrl="https://dock-mind-ai.vercel.app/"
        githubUrl="https://github.com/GitWithKomal/DockMind-AI"
      />

    </main>
  )
}

export default DockMindCaseStudy